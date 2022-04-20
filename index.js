const express=require("express")
const connect=require("./config/db")
const User=require("./model/user")
const app=express()
const port=process.env.PORT ||3000

app.use(express.json())
 app.post("/",async(req,res)=>{
     try{
        const user = new User(req.body)
        const createduser = await user.save()
        res.status(201).send(createduser)

     }catch(err){
         res.status(400).send(err.message)
     }
     

 })
app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})