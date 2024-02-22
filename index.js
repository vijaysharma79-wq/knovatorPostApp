const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')

require("dotenv").config({ path: "backend/config/config.env" });
app.use(cors())
app.use(express.json());

const UserRoute = require('./route/User.Route');
const { default: mongoose } = require("mongoose");
const postroute = require("./route/postRoutes");


app.use("/user", UserRoute);
app.use("/post", postroute);


const database = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
    console.log("data")
  } catch (error) {
    console.log(error.messae)
  }

}
database()

// connectDatabase();
const server = app.listen(8700, () => {
  console.log(`Server is working on http://localhost:${8700}`);
});

module.exports = app;
