import Route from "@ioc:Adonis/Core/Route"

export default function () {
	Route.group(() => {
		Route.get("/", "UsersController.index")
		Route.get("/:id", "UsersController.show")
		Route.post("/", "UsersController.create")
	}).prefix("/users")
}
