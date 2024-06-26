/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
	return knex.schema
		.createTable("locations", (table) => {
			table.increments("id").primary();
			table.string("name").notNullable();
			table.timestamp("created_at").defaultTo(knex.fn.now());
			table
				.timestamp("updated_at")
				.defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
		})
		.createTable("washrooms", (table) => {
			table.increments("id").primary();
			table.string("address").notNullable();
			table.string("type").notNullable();
      table.string("location").notNullable();
      table.string("hours").notNullable();
      table.string("public_access").notNullable();
      table.string("wheelchair_accessible").notNullable();
      table.integer("cleanliness").notNullable();
      table.specificType('coordinates', 'POINT');
			table
				.integer("location_id")
				.unsigned()
				.references("locations.id")
				.onUpdate("CASCADE")
				.onDelete("CASCADE");
			table.timestamp("created_at").defaultTo(knex.fn.now());
			table
				.timestamp("updated_at")
				.defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
		})
		.createTable("reviews", (table) => {
			table.increments("id").primary();
			table.string("name").notNullable();
			table.string("content", 1000).notNullable();
			table.integer("likes").notNullable().defaultTo(0);
			table
				.integer("washroom_id")
				.unsigned()
				.references("washrooms.id")
				.onUpdate("CASCADE")
				.onDelete("CASCADE");
			table.timestamp("created_at").defaultTo(knex.fn.now());
			table
				.timestamp("updated_at")
				.defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
		});
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
	return knex.schema.dropTable("reviews").dropTable("washrooms").dropTable("locations");
}
