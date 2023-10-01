import React from 'react';
import "../../styles/NavButton.css";
import {Link} from "react-router-dom";

function NavButton({routePath, children}) {
  console.log(routePath);
  return (
    <div >      
      <Link className="nav-button" to={routePath}>{children}</Link>
    </div>
  );
}

export default NavButton;
