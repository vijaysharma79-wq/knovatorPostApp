const app = require("express");
const { AddUser, login } = require("../controller/User.Controller");
const verifyToken = require("../utils/verifyToken");
const { createpost, allpost, postUpdate, postDelete } = require("../controller/postController");
const { updateMany } = require("../model/User.model");
const postroute = app.Router()

postroute.post("/create", verifyToken, createpost)
postroute.get("/get", verifyToken, allpost)
postroute.post("/update", verifyToken, postUpdate)
postroute.post("/delete", verifyToken, postDelete)



module.exports = postroute;
