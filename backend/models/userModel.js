import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
    fullName: {
        type: String,
        required: [true, "Please enter user full name!"]
    },
    email: {
        type: String,
        required: [true, "Please Enter an email!"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password!"]
    },
    userType: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    },
    phoneNumber: {
        type: Number,
        required: [true, "Please enter a phone number!"]
    }
});
const User = mongoose.model("User",userSchema)
export default User
