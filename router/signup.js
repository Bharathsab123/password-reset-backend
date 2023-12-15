import { User } from "../user.js";
import express from "express"
import bcrypt from "bcrypt"

const userrouter=express.Router()

userrouter.post("/",async(req,res)=>{
    const {email,password}=req.body

    try{
        const user=await User.findOne({email})
        if(!user){
            const hashpassword=await bcrypt.hash(password,10)
        const newuser = new User({"email" : email,
        "password" : hashpassword})
        await newuser.save()
    res.status(200).json({code:200,message:"create user"})}
        else{res.status(400).json({code:405,message:"user already exist"})}
    }catch(err){
        res.status(500);
        res.send(err);
        res.setHeader('Content-Type', 'text/html')
    }
})





export default userrouter