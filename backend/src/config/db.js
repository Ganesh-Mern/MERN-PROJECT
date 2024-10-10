import  {mongoose} from "mongoose"

const mongodbConnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongoDb is connected");
        
    } catch (error) {
        console.log("error to connect database",error.message);
        
    }
}

export default  mongodbConnect;