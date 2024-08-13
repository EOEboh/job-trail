import * as dotenv from "dotenv"; // best at the very top
dotenv.config();
import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// GET All Jobs
app.get("/api/v1/jobs");

// Create A Job
app.post("/api/v1/jobs");

// Get A Single Job
app.get(`/api/v1/jobs/:id`);

// Edit Job
app.patch("/api/v1/jobs/:id");

// Delete Job
app.delete("/api/v1/jobs/:id");

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
app.use((err, req, res, next) => {
  console.log("err", err);
  res.status(500).json({ msg: "something went wrong" });
});

const port = process.env.PORT || 5000;

app.listen(4000, () => {
  console.log(`Server is working on port ${port}`);
});
