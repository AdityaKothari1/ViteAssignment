const express=require("express")
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


app.listen(8000,async()=>{
    try{
          await connection
          console.log("Connection sucess");
    }catch(err){
    console.log("Error in connection");
    console.log(err);
    }
   
})