import Hash from "@ioc:Adonis/Core/Hash"
import { BaseModel, beforeSave, column } from "@ioc:Adonis/Lucid/Orm"
import { DateTime } from "luxon"

export default class User extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column({
		columnName: "role",
	})
	public role: string

	@column({
		columnName: "isActive",
	})
	public isActive: boolean

	@column({
		columnName: "username",
	})
	public username: string

	@column({
		columnName: "email",
	})
	public email: string

	@column({
		columnName: "password",
		serializeAs: null,
	})
	public password: string

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime

	@beforeSave()
	public static async hashPassword(user: User) {
		if (user.$dirty.password) {
			user.password = await Hash.make(user.password)
		}
	}

	public get active() {
		return this.isActive
	}
}
