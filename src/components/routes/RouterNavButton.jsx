import React from 'react';
import "./styles/RouterNavButton.css";
import {Link} from "react-router-dom"

function RouterNavButton({children, routePath}) {
  return (
    <Link to={routePath} className="routes-nav-button">
      {children}
    </Link>
  )
}

export default RouterNavButton
