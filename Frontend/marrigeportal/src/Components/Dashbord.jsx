

import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Dashbord = () => {
    const [data,setData]=useState([]) 
    useEffect(()=>{
         axios.get(`https://vitefintech.onrender.com/getData`).then((res)=>{
           setData(res.data.data)
        
         })
    },[])
  return (
    <div> 
        <h1>All Applications</h1>    
        <table>
            <thead>
            <tr>   
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Contact No</th>
            <th>Accepct</th>
            <th>Reaject</th>
            </tr> 
            </thead>
            <tbody>
            {data&&data.map((ele,index)=>{
              return  <tr key={index}>
                  <td>{index+1}</td>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.age}</td>
                  <td>{ele.contact}</td>
                  <td><button onClick={()=>alert('Application Accepcted')} style={{backgroundColor:'green',border:"none",padding:"2px",borderRadius:"5px",cursor:'pointer'}}>Accepct</button></td>
                  <td><button onClick={()=>alert('Application Rejected')} style={{backgroundColor:'red',border:"none",padding:"2px",borderRadius:"5px",cursor:'pointer'}}>Reject</button></td>
                </tr>
            })}
            </tbody>
        </table>

    </div>
  )
}
