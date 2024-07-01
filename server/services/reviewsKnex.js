import initKnex from "knex";
import config from "../knexfile.js";
const knex = initKnex(config);

/* GET ALL REVIEWS */
export const getReviews = async () => {
    try {
      const reviews = await knex.select("*").from("reviews");
      if (!reviews) {
        throw new Error("Location not found");
      }
      return reviews;
    } catch (error) {
      throw new Error(error);
    }
  };

  /* GET REVIEWS BY ID */
export const fetchOneReview = async (id) => {
    try {
      const one = await knex("reviews").where({ id: id }).first();
      if (!one) {
        throw new Error("Review not found");
      }
      return one;
    } catch (error) {
      throw new Error(error);
    }
  };

  /* GET WASHROOM + REVIEWS */
//   export const getWashroomReviews = async (id) => {
//     try {
//       const washroomId = id;
//       const washroom = await knex("washrooms")
//         .where({ id: washroomId })
//         .first();
//       if (!washroom) {
//         throw new Error("Washroom not found");
//       }
//       const reviews = await knex("reviews").where({
//         washroom_id: washroomId,
//       });
//       const result = reviews
//       return result;
//     } catch (error) {
//       throw new Error(error);
//     }
//   };