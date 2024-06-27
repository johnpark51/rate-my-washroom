// import initKnex from "knex";
// import configuration from "../knexfile.js";
// const knex = initKnex(configuration);
import express from "express";
import {
    fetchOne
} from "../controllers/locationController.js"
const router = express.Router();

/* WAREHOUSE BY ID */
router
  .route("/:id")
  .get(fetchOne);

// router.get("/locations", async (_req, res) => {
//   try {
//     const data = await knex("locations");
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(400).send(`Error retrieving Users: ${err}`);
//   }
// });

// router.get("/washrooms", async (_req, res) => {
//     try {
//       const data = await knex("washrooms");
//       res.status(200).json(data);
//     } catch (err) {
//       res.status(400).send(`Error retrieving Users: ${err}`);
//     }
//   });

//   router.get("/reviews", async (_req, res) => {
//     try {
//       const data = await knex("reviews");
//       res.status(200).json(data);
//     } catch (err) {
//       res.status(400).send(`Error retrieving Users: ${err}`);
//     }
//   });

export default router;