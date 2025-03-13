import React, { useState } from 'react'
import Dashboard from './components/Dashboard'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MyCollections from './components/MyCollections'
import Details from './components/Details'
import { Outlet } from 'react-router-dom'
function App() {
   const [openSidebarToggle,setOpenSidebarToggle]=useState(false);
   const openSidebar=()=>{
    setOpenSidebarToggle(!openSidebarToggle);
   }
  return (
    <div className='body'>
    <div className='grid-container' >
       <Navbar openSidebar={openSidebar}/>
       <Dashboard openSidebarToggle={openSidebarToggle} openSidebar={openSidebar} />
       <Outlet/>
     </div>
    </div>
      
  )
}

export default App