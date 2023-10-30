import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Styles/HOCNavs.css"

function HOCNavs() {
    const activeHOC = ({isActive})=>isActive?{
        background: "white",
        border: "solid black 2px",
        borderRadius: "8px 8px 0 0",
        borderBottom: "none"
    }:{};
  return (
    <div>
      <NavLink style={activeHOC} className="nav-buttn" to="employees">Employees</NavLink>
      <NavLink style={activeHOC} className="nav-buttn" to="clients">Clients</NavLink>
    </div>
  )
}

export default HOCNavs
