const express=require("express")
const dotenv=require("dotenv")
const bodyParser=require("body-parser")
const  mongodbConnect  = require("./config/db")



const authRoutes =require ("./routes/authRoutes")

dotenv.config()
const app=express()
const PORT=process.env.PORT || 5000


app.use(express.json())
app.use(cors)
app.use(bodyParser.json()); 





app.use("/api/auth",authRoutes)



app.listen(PORT,(req,res)=>{
    mongodbConnect()
    console.log(`server start at port ${PORT}`);
    

})