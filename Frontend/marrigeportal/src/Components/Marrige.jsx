
import React, { useState } from 'react'
import styles from "./user.module.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Marrige = () => {
    const [email,setEmail]=useState("")
    const [address,setAddress]=useState("")
    const [name,setName]=useState("")
    const [contact,setContact]=useState("")
    const [age,setAge]=useState("")
    const navigate=useNavigate()
    const handleMarrige=()=>{
        if(name&&email&&address&&contact&&age){
            const payload={
                name:name,
                email:email,
                address:address,
                contact:contact,
                age:age
            }
            axios.post("http://localhost:8000/applymarrige",payload).then((res)=>{
            console.log(res);
        if(res){
                alert(`${res.data.msg}`);  
                setAddress("")
                setAge("")
                setContact("")
                setEmail("")
                setName("")      
        }
      
       })
        }else{
            alert('Fill All Details');
        }
        
     
       
    }
  return (
    <div className={styles.user} >
        <h1>Marrige Application</h1>
        <input type="text" placeholder='Name' value={name} onChange={e=>setName(e.target.value)} />
        <input type="text" placeholder='Email'value={email} onChange={e=>setEmail(e.target.value)}  />
        <input type="text" placeholder='Address' value={address} onChange={e=>setAddress(e.target.value)} />
        <input type="text" placeholder='Contact' value={contact} onChange={e=>setContact(e.target.value)} />
        <input type="number" placeholder='Age' value={age} onChange={e=>setAge(e.target.value)} />
         <button onClick={handleMarrige} >Submit Application</button>
    </div>
  )
}

export default Marrige