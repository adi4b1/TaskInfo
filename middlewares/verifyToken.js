const User=require("../model/User")

const jwt=require("jsonwebtoken")
const bcrypt=require('bcryptjs')
const dotEnv=require('dotenv')

dotEnv.config()

const secretKey=process.env.SECRET_KEY


const verifyToken=async(req,res,next)=>{
    const token=req.headers.token
    console.log(token);
    
    if(!token){
        return res.status(401).json({error:'token is required'})
    }
    try {
        const decoded=jwt.verify(token,secretKey)
        const user=await User.findById(decoded.userId)
        if(!user){
            return res.status(401).json({error:"user not found"})
        }
        req.userId=user._id
        next()
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"server error",error})
        
    }
}

module.exports=verifyToken