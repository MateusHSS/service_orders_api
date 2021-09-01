import Route from "@ioc:Adonis/Core/Route"

export default function () {
	Route.group(() => {
		Route.get("/", "ClientsController.index")
		Route.post("/", "ClientsController.store")
	}).prefix("/clients")
}
