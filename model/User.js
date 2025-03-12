const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    username:{
        required:true,
        type:String,
    },
    email:{
        required:true,
        unique:true,
        type:String,
    },
    password:{
        required:true,
        type:String,
    },
    task:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Task"
        }
    ]
})

const userModel=mongoose.model("User",UserSchema)

module.exports=userModel