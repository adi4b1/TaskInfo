const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const taskRoute = require("./Routes/taskRoute");
const cors = require("cors");
dotEnv.config();

const app = express();
app.use((req, res, next) => {
  // res.header(
  //   "Access-Control-Allow-Origin",
  //   "https://task-backend-zeta-puce.vercel.app/"
  // );
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // ✅ Allow frontend
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.options("*", cors()); // ✅ Handle preflight requests

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connection success");
  })
  .catch((e) => console.log("getting error", e));

const PORT = process.env.PORT || 4000;

//middleware to connect routes

app.use("/task", taskRoute);
app.use("/home", (req, res) => {
  res.send("Welcome to task monitor");
});
app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
