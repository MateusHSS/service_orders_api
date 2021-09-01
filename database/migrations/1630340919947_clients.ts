import BaseSchema from "@ioc:Adonis/Lucid/Schema"

export default class Clients extends BaseSchema {
	protected tableName = "clients"

	public async up() {
		this.schema.createTable(this.tableName, table => {
			table.increments("id")
			table.string("firstName").notNullable()
			table.string("lastName").nullable()
			table.string("documentNumber").unique()
			table.string("email").unique().notNullable().index()
			table
				.integer("user_id")
				.unsigned()
				.references("id")
				.inTable("users")
				.onDelete("NO ACTION")
				.onUpdate("CASCADE")

			/**
			 * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
			 */
			table.timestamp("created_at", { useTz: true })
			table.timestamp("updated_at", { useTz: true })
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
