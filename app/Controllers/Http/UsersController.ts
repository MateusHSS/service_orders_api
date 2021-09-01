import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import User from "App/Models/User"

export default class UsersController {
	public async index({ response: res }: HttpContextContract) {
		try {
			const users = await User.all()

			res.status(200).json(users)
		} catch (error) {
			throw error
		}
	}

	public async create({ request: req, response: res }: HttpContextContract) {
		try {
			const user = await User.create(req.body())

			res.status(200).json(user)
		} catch (error) {
			throw error
		}
	}

	public async show({ request: req, response: res }: HttpContextContract) {
		try {
			const { id } = req.params()

			const user = await User.findBy("id", id)

			if (!user) throw new Error("Usuário não encontrado!")

			res.status(200).json(user)
		} catch (error) {
			throw error
		}
	}

	public async update({}: HttpContextContract) {}

	public async destroy({}: HttpContextContract) {}
}
