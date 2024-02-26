const app = require("express");
const { AddUser, login } = require("../controller/User.Controller");
const verifyToken = require("../utils/verifyToken");
const userRoute = app.Router()



// this routets for user
userRoute.post("/register", AddUser)
userRoute.post("/login", login)
// route.get("/verify",verifyToken,(req,res)=>{
//     res.send("ok")
// })


module.exports = userRoute;