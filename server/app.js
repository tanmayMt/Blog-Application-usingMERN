const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes.js");
const commentRoutes = require("./routes/commentRoutes.js");

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
app.use("/api/comments", commentRoutes);

module.exports = app;