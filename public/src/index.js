//require('dotenv').config({path: './.env'});


/*import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "../temp/.env"
});

console.log("ENV CHECK:", process.env.MONGO_URI);*/
//import connectDB from "./db/index.js";



//console.log("ENV CHECK:", process.env.MONGO_URI);











/*
import express from "express";
const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) //connection of database
        app.on("error", () => {
            console.log("ERRR: ",error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`APP is listening port $ {process.env.PORT}`);
        })

    } catch(error) {
        console.error("ERROR: ",error);
        throw error;
    }
}) () */




import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔥 Absolute path (no confusion)
dotenv.config({
  path: path.resolve(__dirname, "../temp/.env")
});

console.log("ENV CHECK:", process.env.MONGO_URI);

import connectDB from "./db/index.js";

connectDB()
.then( () => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: $
            {process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MONGO db connection failed !!!", error)
})

