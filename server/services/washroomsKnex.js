import initKnex from "knex";
import config from "../knexfile.js";
const knex = initKnex(config);

/* GET ALL WASHROOMS */
export const getWashrooms = async () => {
	try {
		const washrooms = await knex.select("*").from("washrooms");
		if (!washrooms) {
			throw new Error("Washrooms not found");
		}
		return washrooms;
	} catch (error) {
		throw new Error(error);
	}
};

/* GET WASHROOMS BY ID */
export const getWashroomById = async (id) => {
	try {
		const locationId = id;
		const washroom = await knex("washrooms").where({ location_id: locationId });
		const locations = await knex("locations").where({ id: id }).first();

		if (!locations) {
			throw new Error("Location does not exist");
		}
		if (!washroom) {
			throw new Error("Washroom not found");
		}
		return washroom;
	} catch (e) {
		throw new Error(e);
	}
};

/* GET WASHROOM + THEIR REVIEWS */
export const getWashroomReviews = async (id) => {
    try {
      const washroomId = id;
      const washroom = await knex("washroom")
        .where({ id: washroomId })
        .first();
      if (!washroom) {
        throw new Error("Washroom not found");
      }
      const reviews = await knex("reviews").where({
        washroom_id: washroomId,
      });
      const result = reviews
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };