const expres=require('express')
const router=expres.Router()
const country=require('../Modules/country')

router.get('/',(req,res)=>{
    res.send("Welcome Experience")
})
//Create 
router.post('/post',async (req,res)=>{
    const cntr=new country({
        country:req.body.country

    })
    try{
        const saveData=await cntr.save()
        res.send({Message:'success'})
    }catch(err){
        res.send({Message:'error'})    }
   
})
//Get all
router.get('/getall',async (req,res)=>{
   
     try{
    const cntr= await country.find()
       res.send(cntr)
 
  }catch(err){
    res.send({Message:'error'})    }


})
//Get one by id
router.get('/getone/:id',async (req,res)=>{

    try {
        const cntr=country.findById(req.params.id)
        res.send(cntr)
    } catch (error) {
        res.send({Message:'error'})
    }
})
//update
router.patch('/update/:id', async (req,res)=>{
    const exp=req.body.country
    try {
        
        const cntr= await country.findByIdAndUpdate(req.params.id,exp)
        res.send({Message:'success'})
       
    } catch (error) {
        res.send({Message:"error"})
    }
})
//Delete
router.delete('/Delete/:_id',async (req,res)=>{
    try {
        const cntr=country.findByIdAndDelete(req.params._id)
        res.send({Message:'success'})
        console.log(req.params.id)

    } catch (error) {
        res.send({Message:'error'})
    }

})

module.exports=router