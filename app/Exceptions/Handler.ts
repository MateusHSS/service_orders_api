/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import HttpExceptionHandler from "@ioc:Adonis/Core/HttpExceptionHandler"
import Logger from "@ioc:Adonis/Core/Logger"

export default class ExceptionHandler extends HttpExceptionHandler {
	constructor() {
		super(Logger)
	}

	public async handle(error: any, ctx: HttpContextContract) {
		switch (error.code) {
			case "ER_DUP_ENTRY":
				return ctx.response.status(409).json({ message: error.message })
			case "E_UNAUTHORIZED_ACCESS":
				return ctx.response.status(401).json({ message: error.message })
			case "E_INVALID_API_TOKEN":
				return ctx.response.status(403).json({ message: error.message })
			default:
				console.log(error)
				return ctx.response.status(500).json(error)
		}
	}
}
