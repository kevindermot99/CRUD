import { useState, useEffect, useRef } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import Users from './Users'

// icons
import { TbSunMoon } from "react-icons/tb";
import { BsLayoutSidebarInset } from "react-icons/bs";

function App() {

  const toggleMenu = () => {
    const menu = document.querySelector('.side-menu');
    menu.classList.toggle("hide")
  }


  return (
    <>
      <div className='side-menu'>

        {/* single channel */}
        <div className='channel nodot'>
          <div className='channel-pp'>
          <span className='channel-name'>Switch Theme</span>
            <TbSunMoon />
          </div>
        </div>

        {/* single channel */}
        <div className='channel'>
          {/* <div className='channel-pp'>
            <IoMdAdd />
          </div> */}
        </div>
      </div>

      <div className='always-on-top'>
        {/* single channel */}
        <div className='channel nodot'>
          <div className='channel-pp' onClick={toggleMenu}>
        <span className='channel-name'>Toggle Menu</span>
            <BsLayoutSidebarInset />
          </div>
        </div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path='/create' element={<CreateUser />}></Route>
          <Route path='/update/:id' element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
