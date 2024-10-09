import  {mongoose,Schema} from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const userSchema=new Schema({
    fullName: {
        type: String,
        required: true,
    },
    countryName: {
        type: String,
        required: true,
    },
    countryCode: {
        type: String,
        required: true,
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6, 
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        trim: true,
        lowercase: true, 
    },
},{timestamps:true})

userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10)
    }
    next()
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id:this._id,
        email:this.email,
        fullName:this.fullName,
    },process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE})

}

const User = mongoose.model('User', userSchema);
export default User;


