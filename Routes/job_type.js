const expres=require('express')
const router=expres.Router()
const job_type=require('../Modules/job_type')


//Create 
router.post('/post',async (req,res)=>{
    const jobtype=new job_type({
        job_type:req.body.job_type

    })
    try{
        const jobtypeDate=await jobtype.save()
        res.send({Message:'success'})
    }catch(err){
        res.send({Message:'error'})    }
   
})
//Get all
router.get('/getall',async (req,res)=>{
   
     try{
    const jobtype= await job_type.find()
       res.send(jobtype)
 
  }catch(err){
    res.send({Message:'error'})    }


})
//Get one by id
router.get('/getone/:id',async (req,res)=>{

    try {
        const jobtype=job_type.findById(req.params.id)
        res.send(jobtype)
    } catch (error) {
        res.send({Message:'error'})
    }
})
//update
router.patch('/update/:id', async (req,res)=>{
    const jobtype=req.body.job_type
    try {
        
        const updateex= await job_type.findByIdAndUpdate(req.params.id,jobtype)
        res.send({Message:'success'})
       
    } catch (error) {
        res.send({Message:"error"})
    }
})
//Delete
router.delete('delete/:id',async (req,res)=>{
    try {
        const jobtype=job_type.findByIdAndDelete(req.params.id)
        res.send({Message:'success'})

    } catch (error) {
        res.send({Message:'error'})
    }

})

module.exports=router