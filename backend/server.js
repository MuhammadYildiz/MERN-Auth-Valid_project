import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import router from "./userRoutes/userRouter.js";

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors())
app.use("/users", router);

mongoose.connect(process.env.MongoDB_URL)
    .then(() => {
        console.log("Connected to MongoDB database");
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port " + process.env.PORT);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
