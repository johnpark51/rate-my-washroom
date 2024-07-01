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

export default router;