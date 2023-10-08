import React from 'react';
import "../../styles/NavButton.css";
import {NavLink} from "react-router-dom";

function NavButton({routePath, children}) {
  const aStyle = ({isActive}) => {
    return(
      isActive? { background: "black", color: "white"}: {}
    )
  };
  return (
    <div >      
      <NavLink className="nav-button" style={aStyle} to={routePath}>{children}</NavLink>
    </div>
  );
}

export default NavButton;
