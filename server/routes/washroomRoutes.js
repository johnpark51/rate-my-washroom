import express from "express";
import {
    getWashrooms,
    fetchOne,
    getWashroomReviews
} from "../controllers/washroomController.js"
const router = express.Router();

router
  .route("/")
  .get(getWashrooms);

/* WAREHOUSE BY ID */
router
  .route("/:id")
  .get(fetchOne);

/* LOCATIONS WASHROOMS BY ID */
router
  .route("/:id/reviews")
  .get(getWashroomReviews);

export default router;