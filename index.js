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

const PORT = 4000 || process.env.PORT;

//middleware to connect routes

app.use("/task", taskRoute);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
