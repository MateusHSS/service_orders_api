import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm"
import { DateTime } from "luxon"
import Client from "./Client"

export default class Phone extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column({
		columnName: "ddi",
	})
	public ddi: string

	@column({
		columnName: "ddd",
	})
	public ddd: string

	@column({
		columnName: "number",
	})
	public number: string

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime

	/** Relations */

	@belongsTo(() => Client)
	public client: BelongsTo<typeof Client>

	/**
	 * fullNumber
	 */
	public fullNumber(formatted: boolean) {
		return formatted
			? `+${this.ddi} (${this.ddd}) ${this.number}`
			: `+${this.ddi}${this.ddd}${this.number}`
	}
}
