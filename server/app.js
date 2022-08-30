const mongoose=require("mongoose")
const cors=require("cors")
const express=require("express")
const app=express()
const Users=require("./Formschema")
 app.listen(process.env.PORT || 3001 ,(err)=>{if(!err)console.log("Server is running")
else console.log("err runnung server")})

 app.use(express.json({limit: "30mb" ,extended:true}))
 app.use(express.urlencoded({extended:false}))
 app.use(cors())

 mongoose.connect("mongodb+srv://Ashindeedu:ashin123@ashinmk.rxye7.mongodb.net/Instaclone?retryWrites=true&w=majority",(
   ()=>console.log("connected to db")),(
      ()=>console.log("err")))

 app.post("/upload",async(req,res)=>{
   await Users.create({Image:req.body.image,Location:req.body.location,Name:req.body.author,Description:req.body.description,
   Date:new Date()})
    res.send("done")
 })
 app.get("/posts",async(req,res)=>{
const data= await Users.find()
res.send(data)
 })
 app.get("/",(req,res)=>{
    res.send("backend")
 })
 
