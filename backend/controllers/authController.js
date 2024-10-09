const User=require("../models/User")
const  bcrypt =require ("bcryptjs");
 
 const signup=async(req,res)=>{
    // res.send({message:"signup"})
    try {
        const {fullName,countryName,countryCode,phoneNumber,confirmPassword,password,email}=req.body;
        if(password !== confirmPassword){
            return res.status(409).json({ error: "Passwords don't match" });
        }
        const user = await User.findOne({ email });
        if (user) {
			return res.status(400).json({ error: "Username already exists" });
		}
        const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
			fullName,
			email,
			password:hashedPassword,
            countryName,
            countryCode,
            phoneNumber
			
		})
        if (newUser) {
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				email:newUser.email,
                countryCode:newUser.countryCode,
                countryName:newUser.countryName,
                phoneNumber:newUser.phoneNumber
				
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
 const login=async(req,res)=>{
    res.send({message:"login"})
    
}
 const logout=async(req,res)=>{
    res.send({message:"logout"})
    
}
module.exports={signup,login,logout}