import Route from "@ioc:Adonis/Core/Route"

export default function () {
	Route.get("/users", "UsersController.index")
	Route.get("/users/:id", "UsersController.show")
	Route.post("/users", "UsersController.create")
}
