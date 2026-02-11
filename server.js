import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/posts.js';
import logger from './middlewares/logger.js';
import errorHandler from './middlewares/errors.js';
import connectDB from './config/db.js';
import mongoose from 'mongoose';

//connect to the database
connectDB();
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const User = mongoose.model("User", userSchema);

const app=express();
const PORT=process.env.PORT ||8000;
// to parse the incoming request body as JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//using the logger middleware
app.use(logger);
//main page route
/* const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
router.use(express.static(path.join(__dirname,'public'))); */
//importing the routes
app.use(router);
app.get("/test", async (req, res) => {
  await User.create({ name: "Test User", age: 20 });
  res.send("User created");
});
//using the error handling middleware
app.use(errorHandler);
//starting the server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});