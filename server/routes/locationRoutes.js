import express from "express";
import {
    fetchOne,
    getLocationWashrooms
} from "../controllers/locationController.js"
const router = express.Router();

/* WAREHOUSE BY ID */
router
  .route("/:id")
  .get(fetchOne);

/* LOCATIONS WASHROOMS BY ID */
router
  .route("/:id/washrooms")
  .get(getLocationWashrooms);

export default router;