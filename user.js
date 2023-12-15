import mongoose,{Schema} from "mongoose"

const userschema= new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    OTP:{
        type:String,
        default:""
        
    }
})

const User=mongoose.model("User",userschema)
export {User}