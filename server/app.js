const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes.js");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line

//Routes
app.get("/",(req,res)=>{
    res.status(200).send("<h1>Home Route</h1>");
})
app.use("/api/posts",postRoutes);

module.exports = app;