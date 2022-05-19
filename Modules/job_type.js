const mongoose=require('mongoose')
const jobtypeShema=new mongoose.Schema({
    job_type:{
        type:String,
        required:true
    }

    
})
module.exports=mongoose.model('job_type',jobtypeShema)