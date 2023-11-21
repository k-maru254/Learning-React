import React from 'react';
import {NavLink} from "react-router-dom";
import "./styles/HTTPHeader.css";

function HTTPHeader() {

    const activeButton =({isActive})=>
        (isActive? {
            color: "rgb(6, 56, 83)",
            background: "white",
            height: "100%",
            padding: "8px",
            borderRadius: "8px"
        }:{})
    

  return (
    <div className="http-header-container">
        <nav className="http-nav">
            <NavLink to="home" style={activeButton}>Home</NavLink>
            <NavLink to="register" style={activeButton}>Register Teacher</NavLink>
        </nav>
    </div>
  )
}

export default HTTPHeader
