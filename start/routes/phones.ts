import Route from "@ioc:Adonis/Core/Route"

export default function () {
	Route.group(() => {
		Route.get("/", "PhonesController.index")
		Route.get("/:id", "PhonesController.show")
		Route.post("/", "PhonesController.store")
		Route.patch("/:id", "PhonesController.update")
		Route.delete("/:id", "PhonesController.destroy")
	}).prefix("/phones")
}
