const express=require("express")
const { connection, userModal, marrigeModal } = require("./db")
const app=express()
app.use(express.json())
var cors = require('cors')
app.use(cors())

app.post("/signup",async(req,res)=>{
    const {name,email,password,role}=req.body
    const result= await userModal.find({email})
    if(result.length>0){
     res.send({"msg":"User already exists"})
    }
    else{
       const newuser=new userModal({
          name:name,
          email:email,
          password:password,
          role:role
       })
       await newuser.save()
       res.send({"msg":"signup sucess"})
    }
 })

 app.post("/login",async(req,res)=>{
   const {email,password}=req.body
   const result= await userModal.find({email})
   const pass=result.map((el)=>{
        return el.password
   })
   const role=result.map((el)=>{
      return el.role
 })
   if(result){
         if(password==pass){
            if(role=="r1"){
               res.send({msg:"Admin"})
            }else{
               res.send({msg:"User"})
            }
         }
        else{
           res.send({"msg":"Please fill correct details"})
        }
   }
})

app.post("/applymarrige",async(req,res)=>{
   const {name,email,address,contact,age}=req.body
   const data=new marrigeModal({
      name:name,
      email:email,
      address:address,
      contact:contact,
      age:age,
      isAccepcted:false,
      isRejected:false
   }) 
   await data.save()
   res.send({"msg":"Your Application is Submitted"})
})
app.get("/getData",async(req,res)=>{
   const result=await marrigeModal.find()
   res.send({data:result})
})
app.listen(8000,async()=>{
    try{
          await connection
          console.log("Connection sucess");
    }catch(err){
    console.log("Error in connection");
    console.log(err);
    }
   
})