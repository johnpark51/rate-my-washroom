import express from "express";
import {
    getReviews,
    fetchOne
} from "../controllers/reviewController.js"
const router = express.Router();

router
  .route("/")
  .get(getReviews);

/* REVIEW BY ID */
router
  .route("/:id")
  .get(fetchOne);

export default router;