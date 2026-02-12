import mongoose from 'mongoose';
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    }}
);
const Post=mongoose.model("Post",postSchema);
const userSchema= new mongoose.Schema(({
    Username:{
        type:String,
        required:true,
        unique:true
    },
   password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
}));
const User=mongoose.model("User",userSchema);

export {Post,User};
