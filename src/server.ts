import app from "./app";
import { config } from "dotenv";
import mongoose from "mongoose";

config();

const port = process.env.PORT || 5000;

const DB =
  process.env.DATABASE?.replace("<password>", process.env.DB_PASSWORD ?? "") ||
  "mongodb://localhost:27017";

mongoose.connect(DB ?? "").then(() => {
  console.log("Database is Connected");
});

app.listen(port, () => {
  console.log("Server Running on Port 5000");
});
