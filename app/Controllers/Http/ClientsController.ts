import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import Client from "App/Models/Client"

export default class ClientsController {
	public async index({}: HttpContextContract) {
		try {
			const clients = await Client.all()

			return clients
		} catch (error) {
			throw error
		}
	}

	public async store({ request: req }: HttpContextContract) {
		try {
			const { firstName, lastName, documentNumber, email, phones } = req.body()

			const client = await Client.create({ firstName, lastName, documentNumber, email })

			if (!client) throw new Error("Erro ao criar cliente!")

			for (const phone of phones) {
				await client.related("phones").create(phone)
			}

			return client
		} catch (error) {
			throw error
		}
	}

	public async show({}: HttpContextContract) {}

	public async update({}: HttpContextContract) {}

	public async destroy({}: HttpContextContract) {}
}
