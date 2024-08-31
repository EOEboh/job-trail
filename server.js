import "express-async-errors"; // best at the very top
import * as dotenv from "dotenv"; // best at the very top
dotenv.config();
import express from "express";
import morgan from "morgan";
import jobRouter from "./routes/jobRouter.js";
import mongoose from "mongoose";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { body, validationResult } from "express-validator";

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/jobs", jobRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log("req", req);
  res.json({ message: "data received", data: req.body });
});

// middleware for handling wrong url request (not found)
app.use("*", (req, res) => {
  res.status(404).json({
    msg: "url not found",
  });
});

// middleware error route for errors during processing
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

try {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(4000, () => {
    console.log(`Server is working on port ${port}`);
  });
} catch (error) {
  console.log("DB Connection Error", error);
  process.exit(1);
}
