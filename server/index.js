import "dotenv/config";
import express from "express";
const app = express();

const PORT = process.env.PORT || 5050;

import routes from "./routes/routes.js"
app.use("/", routes);

// basic home route
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});