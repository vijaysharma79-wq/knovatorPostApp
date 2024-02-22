const app = require("express");
const { AddUser, login } = require("../controller/User.Controller");
const verifyToken = require("../utils/verifyToken");
const route = app.Router()

route.post("/register", AddUser)
route.post("/login", login)
route.get("/verify",verifyToken,(req,res)=>{
    res.send("ok")
})


module.exports = route;