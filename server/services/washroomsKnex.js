import initKnex from "knex";
import config from "../knexfile.js";
const knex = initKnex(config);

/* GET WASHROOMS */
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

/* GET WASHROOM + REVIEWS */
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

/* UPDATE INVENTORY ITEM */
export const putWashroom = async (data, id) => {
    const schema = {
      location_id: true,
      address: true,
      type: true,
      location: true,
      hours: true,
      quantity: true,
    };
    try {
      const washroomItem = await knex("washrooms").where({ id: id });
  
      if (!washroomItem) {
        res.status(404).json({ message: "Inventories not found" });
      } else if (validation(schema, data)) {
        console.log(validation(schema, data));
        await knex("inventories").where({ id: id }).update({
          warehouse_id: data.warehouse_id,
          item_name: data.item_name,
          description: data.description,
          category: data.category,
          status: data.status,
          quantity: data.quantity,
        });
        return {
          id: data.id,
          warehouse_id: data.warehouse_id,
          item_name: data.item_name,
          description: data.description,
          category: data.category,
          status: data.status,
          quantity: data.quantity,
        };
      } else {
        res.status(400).json({ message: "Missing or invalid properties" });
      }
    } catch (e) {
      throw new Error(e);
    }
  };