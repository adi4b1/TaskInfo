const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const taskRoute = require("./Routes/taskRoute");

const userRoute = require("./Routes/userRoutes");
const cors = require("cors");
dotEnv.config();

const app = express();
// const cors = require("cors");
app.use(cors({ origin: "https://task-frontend-orcin.vercel.app" }));

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
app.use("/user", userRoute);
app.use("/test", (req, res) => {
  res.send("Welcome to task monitor");
});
app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
