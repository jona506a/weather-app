import React from "react"
import {NavLink} from "react-router-dom"

const Navigation = () => {
   return (
      <div class="nav-wrapper">
         <NavLink to="/">Home</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to="/Contact">Contact</NavLink>
      </div>
   )
}

export default Navigation