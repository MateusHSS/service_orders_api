import Route from "@ioc:Adonis/Core/Route"

export default function () {
	Route.post("/login", "AuthController.login")
}
