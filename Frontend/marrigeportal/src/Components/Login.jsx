import React, { useState } from 'react'
import axios from "axios"

import styles from "./user.module.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const naviagte=useNavigate()
    const [emailmsg,setEmailMsg]=useState("")
    const [setPass,setPassMsg]=useState("")
    const handleLogin=()=>{
        if(email&&password){
            const payload={
                email:email,
                password:password,
            }
            console.log(payload);
           axios.post("http://localhost:8000/login",payload).then((res)=>{
            console.log(res);
            if(res.data.msg=="Admin"){
                naviagte("/dashboard")
            }
            if(res.data.msg=="User"){
                naviagte("/marrige")
            }
            else{
                setPassMsg("")
                setPassMsg("Wrong Password")
            }
           })
        }else{
            if(!email){
                setEmailMsg("Please fill Email")
            }
            if(!password){
    setPassMsg("Please Enter Password")    
     } 
     else if(email&&!password){
         setEmail("")
         setPassMsg("Please Enter Password") 
     } 
     else if(!email&&password){
        setEmailMsg("Please fill Email")
        setPassMsg("")
     }     
 }
    }
  return (
    <div className={styles.user}>
    <h1>Login</h1>
    <input type="text" placeholder='Email'value={email} onChange={e=>setEmail(e.target.value)}  />
     {emailmsg&&<p>{`*${emailmsg}`}</p>}
        <input type="text" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} />
        {setPass&&<p>{`*${setPass}`}</p>}
     <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login