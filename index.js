const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const taskRoute = require("./Routes/taskRoute");

const userRoute = require("./Routes/userRoutes");

const locRoutes=require('./Routes/LocRoutes/locationRoutes')
const cors = require("cors");
dotEnv.config();

const app = express();
// const cors = require("cors");
app.use(cors({ origin: "*" }));

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connection success");
  })
  .catch((error) => console.log("getting error",error));

const PORT = process.env.PORT || 4000;

//middleware to connect routes

app.use("/task", taskRoute);
app.use("/user", userRoute);
app.use('/location',locRoutes)
app.use("/test", (req, res) => {
  res.send("Welcome to task monitor");
});
app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
