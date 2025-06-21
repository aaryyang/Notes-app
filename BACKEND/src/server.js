import express from "express"; //type: module
import cors from "cors";
// const express = require("express"); //type: commonjs
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middlware/rateLimiter.js";

dotenv.config();

const app = express();

const __dirname= path.resolve()

//middleware
if(process.env.NODE_ENV !== "production"){
    app.use(cors({
    origin: "http://localhost:5173",
}
));
}

app.use(express.json());

app.use(rateLimiter);

//simple middleware
// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} and req url is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../FRONTEND/dist")));

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../FRONTEND","dist","index.html"));
    })
}

connectDB().then(()=>{
    app.listen(5001, ()=>{
    console.log("Server started on PORT: 5001");
    });
});
