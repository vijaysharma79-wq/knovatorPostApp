const express = require("express");
const path = require("path");
const cors = require('cors')
const UserRoute = require('./route/UserRoute');
const { default: mongoose } = require("mongoose");
const userRoute = require("./route/UserRoute");
const postRoute = require("./route/postRoutes");
const app = express();

// require("dotenv").config({ path: "backend/config/config.env" });
app.use(cors())
app.use(express.json());




app.use("/user",userRoute);
app.use("/post", postRoute);


const database = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
    console.log("data")
  } catch (error) {
    console.log(error.messae)
  }

}
database()

// listening server
 app.listen(5050, () => {
  console.log(`Server is working on port ${5050}`);
});

