import express from "express"
import dotenv from "dotenv"
import { Connectdb } from "./db.js"
import userrouter from "./router/signup.js"
import cors from "cors"
import loginrouter from "./router/login.js"
import resetrouter from "./router/reset.js"

dotenv.config()
const app =express()
const PORT=process.env.PORT
app.use(express.json())
app.use(cors())
Connectdb()
app.use("/user",userrouter)
app.use("/signup",loginrouter)
app.use("/reset",resetrouter)
app.listen(PORT,()=>{console.log("server is running")})