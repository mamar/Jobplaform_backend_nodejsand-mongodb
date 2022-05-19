const expres=require('express')
const router=expres.Router()
const job_location=require('../Modules/job_location')

router.get('/',(req,res)=>{
    res.send("Welcome Experience")
})
//Create 
router.post('/post',async (req,res)=>{
    const loc=new job_location({
        job_location:req.body.job_location,
        country:req.body.country

    })
    try{
        const saveData=await loc.save()
        res.send({Message:'success'})
    }catch(err){
        res.send({Message:'error'})    }
   
})
//Get all
router.get('/getall',async (req,res)=>{
   
     try{
    const loc= await job_location.find().populate('country')
       res.send(loc)
 
  }catch(err){
    res.send({Message:'error'})    
     console.log(err)   }




})
//Get one by id
router.get('/getone/:id',async (req,res)=>{

    try {
        const loc=job_location.findById(req.params.id).populate('country')
        res.send(loc)
    } catch (error) {
        res.send({Message:'error'})
    }
})
//update
router.patch('/update/:id', async (req,res)=>{
    const loc=req.body.job_location
    try {
        
        const upDateDate= await job_location.findByIdAndUpdate(req.params.id,exp)
        res.send({Message:'success'})
       
    } catch (error) {
        res.send({Message:"error"})
    }
})
//Delete
router.delete('/Delete/:_id',async (req,res)=>{
    try {
        const loc=job_location.findByIdAndDelete(req.params._id)
        res.send({Message:'success'})
        console.log(req.params.id)

    } catch (error) {
        res.send({Message:'error'})
    }

})

module.exports=router