import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import Phone from "App/Models/Phone"

export default class PhonesController {
	public async index({ response: res }: HttpContextContract) {
		try {
			const phones = Phone.all()

			res.status(200).json(phones)
		} catch (error) {
			throw error
		}
	}

	public async store({ request: req, response: res }: HttpContextContract) {
		try {
			const { ddi, ddd, number } = req.body()

			const phone = await Phone.create({ ddi, ddd, number })

			res.status(200).json(phone)
		} catch (error) {
			throw error
		}
	}

	public async show({ request: req, response: res }: HttpContextContract) {
		try {
			const { id } = req.params()
			const phone = await Phone.find(id)

			if (!phone) throw new Error("Telefone não encotrado!")

			res.status(200).json(phone)
		} catch (error) {
			throw error
		}
	}

	public async update({ request: req, response: res }: HttpContextContract) {
		try {
			const { id } = req.params()
			const data = req.body()

			const phone = await Phone.find(id)

			if (!phone) throw new Error("Telefone não encontrado!")

			phone.merge({ ...data })

			await phone.save()

			res.status(200).json(phone)
		} catch (error) {
			throw error
		}
	}

	public async destroy({ request: req, response: res }: HttpContextContract) {
		try {
			const { id } = req.params()

			const phone = await Phone.find(id)

			if (!phone) throw new Error("Telefone não encontrado!")

			await phone.delete()

			res.status(204).json({ message: "Telefone deletado com sucesso!" })
		} catch (error) {
			throw error
		}
	}
}
