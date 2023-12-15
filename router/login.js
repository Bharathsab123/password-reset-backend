import { User } from "../user.js";
import express from "express"
import bcrypt from "bcrypt"
import generatetoken from "../utils/index.js";



const loginrouter=express.Router()

loginrouter.post("/",async(req,res)=>{
   
    try{
        const {password}=req.body  
        const user=await User.findOne({email: req.body.email})
       
        const ismatch = await bcrypt.compare(password,user.password)
        if(!ismatch){
            res.status(404).json({code:404 ,message:"invalid password"})
           
        }
        
        else{
            const token=generatetoken(user)

            res.status(200).json({code:200 ,message:"connect success",token})}
    }
    catch(err){
        res.status(400).json({code:500 , message:"User not Found"})
    }
})

export default loginrouter