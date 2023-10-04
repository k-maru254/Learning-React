import React from 'react';
import "../../styles/NavButton.css";
import {NavLink} from "react-router-dom";

function NavButton({routePath, children}) {
  console.log(routePath);
  const aStyle = ({isActive}) => {
    return(
      isActive? { background: "black", color: "white"}: console.log("😌 not active")
    )
  };
  return (
    <div >      
      <NavLink className="nav-button" style={aStyle} to={routePath}>{children}</NavLink>
    </div>
  );
}

export default NavButton;
