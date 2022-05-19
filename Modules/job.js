const mongoose=require('mongoose')
const jobSchema=new mongoose.Schema({
    job_type: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'job_type' 
      },
      job_category: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'job_category' 
      },
      job_location: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'job_location' 
      },    
      experience: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'experience' 
      },
    job_title:{
        type:String,
        required:true
        
    },
    job_description:{
        type :String,
        required:true
    },
    job_requirement:{
        type:String,
        required:true
    },
    job_salary:{
        type:String,
        required:true
    },
    job_location:{
        type:String,
        required:true
    },
    posted_date:{
        type:Date,
        required:true
    },
    deadline:{
        type :Date ,
        required:true
    },
    status:{
        type:String ,
        required:true
    }
})
module.exports=mongoose.model('job',jobSchema)