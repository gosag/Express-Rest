import User from '../models/UserModel.js';
import express from "express";
const userRouter=express.Router();
userRouter.get('/',async(req,res,next)=>{
    try{
        const limit=req.query.limit;
        let users;
        if(limit &&!isNaN(limit)){
            users=await User.find().limit(limit)
            res.status(200).json(users)
        }
        else{
            users=await User.find()
            res.json(users)
        }    
    }
    catch(error){
        next(error)
    }
    
})
userRouter.post("/",async (req,res,next)=>{
    try{
        const user=new User({
        userName:req.body.userName,
        password:req.body.password,
        email:req.body.email
    })
    await user.save()
    res.status(201).json(user)
    }
    catch(error){
        if(error.name==="ValidationError"){
            error.status=400;
        }
        if(error.name === "MongoServerError"){
            error.status=409;
        }
        console.log("ERROR NAME:", error.name);
        console.log(error);
        next(error)
    }
})
export default userRouter;

