const mongoose=require('mongoose')


const LocationSchema=new mongoose.Schema({
    locationname:{
        type:String,
        required:true
    },
    created:{
        type:String,
        default:Date.now
    }
})


module.exports=mongoose.model('Location',LocationSchema)

