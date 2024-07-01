import "dotenv/config";
import express from "express";
import cors from "cors";

import locationRoutes from "./routes/locationRoutes.js";

const PORT = process.env.PORT || 5050;
const app = express();

/* MIDDLEWARE */
app.use(
	cors({
		origin: process.env.CORS_URL,
		methods: "GET,PUT,PATCH,POST,DELETE",
		credentials: true,
	})
);
app.use(express.json());

/* ROUTES */
app.use("/api/locations", locationRoutes);

app.listen(PORT, () => {
	console.log(`Running at http://localhost:${PORT}`);
});
