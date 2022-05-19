const mongoose=require('mongoose')
const experiencechema=new mongoose.Schema({
    experience:{
        type:String,
        required:true
    }

    
})
module.exports=mongoose.model('experience',experiencechema)