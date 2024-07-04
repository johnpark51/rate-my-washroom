import initKnex from "knex";
import config from "../knexfile.js";
const knex = initKnex(config);

/* GET ALL WASHROOMS */
export const getWashrooms = async () => {
	try {
		const washrooms = await knex
			.join("locations", "locations.id", "washrooms.location_id")
			.select(
				"washrooms.id",
				"locations.name",
				"washrooms.address",
				"washrooms.type",
				"washrooms.hours",
				"washrooms.public_access",
				"washrooms.wheelchair_accessible",
				"washrooms.cleanliness",
				"washrooms.location_id",
				"washrooms.likes",
				"washrooms.gender_neutral",
				"washrooms.family_friendly",
				"washrooms.lat",
				"washrooms.lng"
			)
			.from("washrooms");
		if (!washrooms) {
			return res.status(404).json({ message: "Washrooms not found" });
		}
		return washrooms;
	} catch (error) {
		throw new Error(error);
	}
};

/* GET WASHROOMS BY ID */
export const getWashroomById = async (id) => {
	try {
		const one = await knex("washrooms")
			.where({ "washrooms.id": id })
			.join("locations", "locations.id", "washrooms.location_id")
			.select(
				"washrooms.id",
				"locations.name",
				"washrooms.address",
				"washrooms.type",
				"washrooms.hours",
				"washrooms.public_access",
				"washrooms.wheelchair_accessible",
				"washrooms.cleanliness",
				"washrooms.location_id",
				"washrooms.likes",
				"washrooms.gender_neutral",
				"washrooms.family_friendly",
				"washrooms.lat",
				"washrooms.lng"
			)
			.first();
		if (!one) {
			throw new Error("Washroom not found");
		}
		return one;
	} catch (e) {
		throw new Error(e);
	}
};

/* GET WASHROOM + THEIR REVIEWS */
export const getWashroomReviews = async (id) => {
	try {
		const washroomId = id;
		const washroom = await knex("washrooms").where({ id: washroomId }).first();
		if (!washroom) {
			throw new Error("Washroom not found");
		}
		const reviews = await knex("reviews").where({
			washroom_id: washroomId,
		});
		const result = reviews;
		return result;
	} catch (error) {
		throw new Error(error);
	}
};
