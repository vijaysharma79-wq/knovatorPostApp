const UserModel = require("../model/User.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secretKey = 'your_secret_key_here';



const AddUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = bcrypt.hash(password, 10);
        const newUser = { username: username, email: email, password: hashedPassword };
        const user = await UserModel.create(newUser);
        res.status(201).json({ message: 'User registered successfully', user: user });
    } catch (error) {
        console.log("error", error);
    }
}

const login = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await UserModel.find({ email: email });
        console.log(user)
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        else {
            bcrypt.compare(password, user.password)
            const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
            res.json({ token });
        }

    } catch (error) {
        console.log("error", error);
    }
}



module.exports = { AddUser, login };