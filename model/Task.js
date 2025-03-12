const mongoose=require('mongoose')

const addTaskSchema=new mongoose.Schema({
    taskname:{
        type:String,
        required:true,
    },
    created:{
        type:String,
        required:true,
    },
    priority:{
        type:[{
            type:String,
            enum:['High','Medium','Low']
        }]
    },
    finishedDate:{
        type:String,
        required:true,
    },
    deadline:{
        type:String,
        
    },
    isComplete:{
        type:Boolean,
        default:false,
    },
    user:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]
})

const Task=mongoose.model("Task",addTaskSchema)

module.exports=Task