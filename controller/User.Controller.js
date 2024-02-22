const UserModel = require("../model/User.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secretKey = 'your_secret_key_here';



const AddUser= async(req,res)=>{
    try {
        const { username,email, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = {  username:username,email:email, password: hashedPassword };
        const user = await UserModel.create(newUser);
        res.status(201).json({ message: 'User registered successfully',user:user });
    } catch (error) {
      console.log("error", error);   
    }
}

const login=async(req,res)=>{
    try {
        const { username,email, password } = req.body;
        const user = await UserModel.find({email:email});
        if (!user || !bcrypt.compareSync(password, user[0].password)) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user[0]._id }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.log("error", error);
    }
}



module.exports = { AddUser, login };