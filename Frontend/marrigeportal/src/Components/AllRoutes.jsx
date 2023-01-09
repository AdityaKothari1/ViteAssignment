

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashbord } from './Dashbord'
import Login from './Login'
import Marrige from './Marrige'
import { Signup } from './Signup'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/marrige' element={<Marrige/>}/>
        <Route path='/dashboard' element={<Dashbord/>} />
    </Routes>
  )
}
