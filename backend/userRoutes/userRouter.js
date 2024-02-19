import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
const router = express.Router();
/* User Signup // Create new user */
router.post("/signup", async (req, res) => {
    console.log(req.body);
    const { fullName, email, password, phoneNumber } = req.body;
    let newUser;
    let existsUser;
    try {
        existsUser = await User.find({ email});
        if (existsUser.length > 0) {
            return res.status(400).json({ message: "User already exists, Please Login" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        newUser = await User.create({
            fullName,
            email,
            password: hashedPassword,
            phoneNumber,
        });
        return res.status(200).json({ message: "Signup successful!", newUser });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: "User signup failed, Please enter all inputs!" });
    }
});
router.post("/login",async (req, res)=>{
    const {email, password} = req.body;
    let user;
    let userPassword;
    try {
        user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"User dose not exists, Please signup!"})
        }
        userPassword = await bcrypt.compare(password, user.password);
        if(!userPassword){
            return res.status(400).json({message:"Wrong password, please enter correct password"})
        }
        return res.status(200).json({message: "User login successful!", user})
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"User login is filed! "})
    }
})
export default router;
