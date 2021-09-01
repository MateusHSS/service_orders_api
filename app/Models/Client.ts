import { BaseModel, column, HasMany, hasMany, HasOne, hasOne } from "@ioc:Adonis/Lucid/Orm"
import { DateTime } from "luxon"
import Phone from "./Phone"
import User from "./User"

export default class Client extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column({
		columnName: "firstName",
	})
	public firstName: string

	@column({
		columnName: "lastName",
	})
	public lastName: string

	@column({
		columnName: "documentNumber",
	})
	public documentNumber: string

	@column({
		columnName: "email",
	})
	public email: string

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime

	@hasOne(() => User)
	public user: HasOne<typeof User>

	@hasMany(() => Phone)
	public phones: HasMany<typeof Phone>

	public get fullName() {
		return `${this.firstName} ${this.lastName}`
	}
}
