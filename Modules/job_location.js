const mongoose=require('mongoose')
const locationSchema=new mongoose.Schema({
    job_location:{
        type:String,
        required:true
    },
    country: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'country' 
      },

    
})
module.exports=mongoose.model('job_location',locationSchema)