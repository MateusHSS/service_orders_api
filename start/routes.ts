/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route"
import authentication from "./routes/authentication"
import clients from "./routes/clients"
import phones from "./routes/phones"
import users from "./routes/users"

Route.group(() => {
	Route.get("/", async () => {
		return "Hello world"
	})

	authentication()

	Route.group(() => {
		users()
		clients()
		phones()
	}).middleware("auth")
}).prefix("/api")
