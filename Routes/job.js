const expres=require('express')
const res = require('express/lib/response')
const router=expres.Router()
const job=require('../Modules/job')
router.post('/post',async (req,res)=>{
    const job_category=req.body.job_category
    const job_type=req.body.job_type
    const experience=req.body.experience
    const job_title=req.body.job_title
    const job_description=req.body.job_description
    const job_requirement=req.body.job_requirement
   const job_salary=req.body.job_salary
    const job_location=req.body.job_location
    const posted_date=new Date()
   const deadline =req.body.deadline
    const status='Open'
    
    try {
        const addjob = await new job({
            job_type,
            job_category,
            experience,
            job_title,
            job_description,
            job_requirement,
            job_salary,
            job_location,
            posted_date,
            deadline,
            status,
            
        })
         const ajob=addjob.save()
         res.send({Message:"success"})

    } catch (error) {
        res.send({Message:"error"})

    }
})
router.get('/getall',async (req,res)=>{
    try {
        const jobs=await job.find()
        res.send(jobs) 
    } catch (error) {
        res.send({Message:"error"})

    }
})
router.get('/getone/:id', async (req,res)=>{
    try {
        const jobbyid= await job.findById(req.params.id)
        res.send(jobbyid)
    } catch (error) {
        res.send({Message:"error"})
        
    }
})
router.patch('/update/:id',async (req,res)=>{
    try {
        const id=req.params.id
        const job_title=req.body.job_title
        const job_description=req.body.job_description
        const   job_requirement=req.body.job_requirement
        const   job_salary =req.body.job_salary
        const  job_location=req.body.job_location
        const updateDate= await job.findByIdAndUpdate(
            id,job_title,job_description,job_requirement,job_salary,job_location
        )
        res.send({Message:"success"})
    } catch (error) {
        res.send({Message:"error"})
    }
})
router.delete('/delete/:id',async (req,res)=>{
    try {
        const id=req.params.id
        const DeletData=await job.findByIdAndDelete(id)
        res.send({Message:"success"})
    } catch (error) {
        res.send({Message:"error"})
    }
   
})
module.exports=router
