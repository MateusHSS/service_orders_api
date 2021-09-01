import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"

export default class AuthController {
	public async login({ auth, request: req, response: res }: HttpContextContract) {
		try {
			const { email, password } = req.body()

			const token = await auth.attempt(email, password)

			res.status(200).json({ token })
		} catch (error) {
			res.status(400).send(error)
		}
	}
}
