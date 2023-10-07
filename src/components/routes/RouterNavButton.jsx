import React from 'react';
import "./styles/RouterNavButton.css";
import {Link} from "react-router-dom"

function RouterNavButton({children}) {
  return (
    <Link to="home" lassName="routes-nav-button">
      {children}
    </Link>
  )
}

export default RouterNavButton
