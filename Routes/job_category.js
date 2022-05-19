const expres=require('express')
const router=expres.Router()
const job_category=require('../Modules/job_category')


//Create 
router.post('/post',async (req,res)=>{
    const category=new job_category({
        category_name:req.body.category_name

    })
    try{
        const newcategory=await category.save()
        res.send({Message:'success'})
    }catch(err){
        res.send({Message:'error'})    }
   
})
//Get all
router.get('/getall',async (req,res)=>{
   
     try{
    const category= await job_category.find()
       res.send(category)
 
  }catch(err){
    res.send({Message:'error'})    }


})
//Get one by id
router.get('/getone/:id',async (req,res)=>{

    try {
        const category=job_category.findById(req.params.id)
        res.send(category)
    } catch (error) {
        res.send({Message:'error'})
    }
})
//update
router.patch('/update/:id', async (req,res)=>{
    const category=req.body.category_name
    try {
        
        const updateCategory= await job_category.findByIdAndUpdate(req.params.id,category)
        res.send({Message:'success'})
       
    } catch (error) {
        res.send({Message:"error"})
    }
})
//Delete
router.delete('delete/:id',async (req,res)=>{
    try {
        const category=job_category.findByIdAndDelete(req.params.id)
        res.send({Message:'success'})

    } catch (error) {
        res.send({Message:'error'})
    }

})

module.exports=router