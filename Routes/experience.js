const expres=require('express')
const router=expres.Router()
const experience=require('../Modules/experience')

router.get('/',(req,res)=>{
    res.send("Welcome Experience")
})
//Create 
router.post('/post',async (req,res)=>{
    const exp=new experience({
        experience:req.body.experience

    })
    try{
        const newexp=await exp.save()
        res.send({Message:'success'})
    }catch(err){
        res.send({Message:'error'})    }
   
})
//Get all
router.get('/getall',async (req,res)=>{
   
     try{
    const exp= await experience.find()
       res.send(exp)
 
  }catch(err){
    res.send({Message:'error'})    }


})
//Get one by id
router.get('/getone/:id',async (req,res)=>{

    try {
        const exp=experience.findById(req.params.id)
        res.send(exp)
    } catch (error) {
        res.send({Message:'error'})
    }
})
//update
router.patch('/update/:id', async (req,res)=>{
    const exp=req.body.experience
    try {
        
        const updateex= await experience.findByIdAndUpdate(req.params.id,exp)
        res.send({Message:'success'})
       
    } catch (error) {
        res.send({Message:"error"})
    }
})
//Delete
router.delete('/Delete/:_id',async (req,res)=>{
    try {
        const Deletexp=experience.findByIdAndDelete(req.params._id)
        res.send({Message:'success'})
        console.log(req.params.id)

    } catch (error) {
        res.send({Message:'error'})
    }

})

module.exports=router