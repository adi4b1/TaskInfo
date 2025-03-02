const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const taskRoute = require("./Routes/taskRoute");

dotEnv.config();

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connection success");
  })
  .catch((e) => console.log("getting error"));

const PORT = process.env.PORT || 4000;

//middleware to connect routes

app.use("/task", taskRoute);
app.use("/home", (req, res) => {
  res.send("Welcome to task monitor");
});
app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
