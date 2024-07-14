import React, { useState } from 'react'
import './navbar.css';
const Navbar = () => {
    const [menu,setMenu]=useState('home')
  return (
    <div className='nav-bar'>
        <div>
            <h4>Shopping</h4>
        </div>
        <ul className='nav-items'>
            <li className={menu==='home'?"active":""}onClick={()=>{setMenu("home")}}>Home</li>
            <li className={menu==='contact'?"active":""} onClick={()=>{setMenu("contact")}}>Contact us</li>
            <li className={menu==='reg'?"active":""} onClick={()=>{setMenu("reg")}}>Register</li>
            <li className={menu==='log'?"active":""} onClick={()=>{setMenu("log")}}>Login</li>
        </ul>
    </div>
  )
}

export default Navbar