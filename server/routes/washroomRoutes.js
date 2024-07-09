import express from "express";
import {
    getWashrooms,
    fetchOne,
    getWashroomReviews
} from "../controllers/washroomController.js"
const washroomRouter = express.Router();

washroomRouter
  .route("/")
  .get(getWashrooms);

/* WASHROOM BY ID */
washroomRouter
  .route("/:id")
  .get(fetchOne);

/* LOCATIONS WASHROOMS BY ID */
washroomRouter
  .route("/:id/reviews")
  .get(getWashroomReviews);

export default washroomRouter;