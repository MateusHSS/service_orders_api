import Route from "@ioc:Adonis/Core/Route"

export default function () {
	Route.get("/clients", "ClientsController.index")
	Route.post("/clients", "ClientsController.store")
}
