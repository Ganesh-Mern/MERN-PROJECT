 const signup=async(req,res)=>{
    res.send({message:"signup"})
    
}
 const login=async(req,res)=>{
    console.log("login");
    
}
 const logout=async(req,res)=>{
    console.log("logout");
    
}
module.exports={signup,login,logout}