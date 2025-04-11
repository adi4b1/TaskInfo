const mongoose=require('mongoose')


const LocationSchema=new mongoose.Schema({
    location:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
})

const LocationSc=mongoose.model('Location',LocationSchema)
module.exports=LocationSc

