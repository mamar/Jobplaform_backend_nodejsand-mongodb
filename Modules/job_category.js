const mongoose=require('mongoose')
const jobcategorySchema=new mongoose.Schema({
    category_name:{
        type:String,
        required:true
    }

    
})
module.exports=mongoose.model('job_category',jobcategorySchema)