const app = require("express");
const verifyToken = require("../utils/verifyToken");
const { createpost, allpost, postUpdate, postDelete } = require("../controller/postController");
const { updateMany } = require("../model/User.model");
const postRoute = app.Router()

///this is a post routes
postRoute.post("/createpost", verifyToken, createpost)
postRoute.get("/getpost", verifyToken, allpost)
postRoute.post("/updatepost", verifyToken, postUpdate)
postRoute.post("/deletepost", verifyToken, postDelete)



module.exports = postRoute;
