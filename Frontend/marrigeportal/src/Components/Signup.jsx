import React from 'react'
import { useState } from 'react'
import axios from "axios"
import styles from "./user.module.css"
import { useNavigate } from 'react-router-dom'
export const Signup = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    const [role,setRole]=useState("")
    const navigate=useNavigate()
    const handleSignup=()=>{
        if(name&&password&&email&&role){
            const payload={
                name:name,
                email:email,
                password:password,
                role:role
            }
            axios.post("https://vitefintech.onrender.com/signup",payload).then((res)=>{
        
        if(res){
            if(res.data.msg=="signup sucess"){
                alert(`${res.data.msg}`);
                navigate("/login")
            }
            else{
                alert(`${res.data.msg}`);
            }
        }
      
       })
        }else{
            alert('Fill All Details');
        }
        
     
       
    }
  return (
    <div className={styles.user} >
    <h1>Signup</h1>
        <input type="text" placeholder='Name' value={name} onChange={e=>setName(e.target.value)} />
        <input type="text" placeholder='Email'value={email} onChange={e=>setEmail(e.target.value)}  />
        <input type="text" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} />
         <select name="" onChange={e=>setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="r1">R1(Admin)</option>
            <option value="r2">R2</option>
            <option value="r3">R3</option>
         </select>
         <button onClick={handleSignup}>Signup</button>
    </div>

  )
}
