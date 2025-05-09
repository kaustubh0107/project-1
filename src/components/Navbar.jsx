import React from 'react'
import {NavLink } from 'react-router-dom'

const Navbar = () => { 
   
  return (
    <div>
      <nav>
      <NavLink className={(e) => {return e.isActive? "red": ""}} to="/"><li>HOME</li></NavLink>
      <NavLink className={(e) => {return e.isActive? "red": ""}} to="/About"><li>ABOUT</li></NavLink>
      <NavLink className={(e) => {return e.isActive? "red": ""}} to="/Login"><li>LOGIN</li></NavLink>
      </nav>
    </div>


  )
}

export default Navbar
