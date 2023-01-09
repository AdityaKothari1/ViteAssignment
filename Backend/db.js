const mongoose = require("mongoose");
require("dotenv").config()
mongoose.set('strictQuery', false)
const connection = mongoose.connect(
  process.env.Mongo_URL
);

const userSchema=mongoose.Schema({
    "name":{type:String,require:true},
    "email":{type:String,require:true},
    "password":{type:String,require:true},
    "role":{type:String,require:true}
}) 
const marrigeSchema=mongoose.Schema({
  name:{type:String,require:true},
  email:{type:String,require:true},
  address:{type:String,require:true},
  contact:{type:String,require:true},
  age:{type:String,require:true},
  isAccepcted:{type:Boolean,default:false},
  isRejected:{type:Boolean,default:false}
  
})
const userModal=mongoose.model("user",userSchema)
const marrigeModal=mongoose.model("marrige",marrigeSchema)
module.exports={userModal,marrigeModal,connection}