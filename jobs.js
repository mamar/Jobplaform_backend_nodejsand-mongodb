require('dotenv').config()
const express=require('express')
const bodyParser = require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose')
const app=express()
const experience=require('./Routes/experience')
const job=require('./Routes/job')
const jobtype=require('./Routes/job_type')
const jobcategory=require('./Routes/job_category')
const joblocation=require('./Routes/location')
const country=require('./Routes/country')


mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db=mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log("Connected To The database"))
app.use(express.json())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
  app.use(cors({
      origin:["http://127.0.0.1:3000",'http://localhost:3000'],
      methods:["Get","Post",'post',"DELETE","PUT","put","PATCH","patch"],
      credentials:true
  }));

//Routes
app.use('/experience',experience)
app.use('/job',job)
app.use('/jobcategory',jobcategory)
app.use('/jobtype',jobtype)
app.use('/joblocation',joblocation)
app.use('/country',country)

app.listen(300, () => {
    console.log(`Server Started at ${300}`)
})
app.get('/',(req,res)=>{
    res.send('Welcome to ethniojobs')
})

