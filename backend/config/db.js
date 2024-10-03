const mongoose=require("mongoose")

const mongodbConnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongoDb is connected");
        
    } catch (error) {
        console.log("error to connect database",error.message);
        
    }
}

module.exports=  mongodbConnect;