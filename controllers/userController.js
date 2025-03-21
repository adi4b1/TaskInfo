const User=require('../model/User')

const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const dotEnv=require('dotenv')

dotEnv.config()

const secretKey=process.env.SECRET_KEY

const userRegistration=async(req,res)=>{
    const{username,email,password}=req.body

    try {
        const user=await User.findOne({email})
        if(user){
            return res.status(401).json({error:"user already exists"})
        }
        const hashedpassword=await bcrypt.hash(password,10)

        const newUser=new User({
            username,
            email,
            password:hashedpassword
        })
        await newUser.save()
        res.status(200).json("user created success")

        console.log('user registered.......');
    } catch (error) {
        res.status(500).json("server error")
        console.log(error);
    }
}


const userLogin=async(req,res)=>{
    try {
        const{email,password}=req.body

        const user=await User.findOne({email})
        console.log('find from login',user._id,user);
        
        const userId=user._id
        const username=user.username
        
        if(!user || !(await bcrypt.compare(password,user.password))){
            res.status(401).json({error:"invalid username or password"})
        }

        const token=jwt.sign({userId:user._id},secretKey,{expiresIn:'24h'})
        console.log(token);

        res.status(200).json({message:'login success',token,userId,username})
        // console.log(email);
        console.log(username);
        console.log(userId);
        
        
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'server error'})
        
    }
}


module.exports={userRegistration,userLogin}