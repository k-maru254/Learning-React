import React from 'react';
import "./styles/RoutesNavigation.css";
import RouterNavButton from "./RouterNavButton";

function RoutesNavigation() {
  const navs = ["Home", "Staff", "Clients", "Services"]
  return (
    <div className="routes-navigation" >
      {navs.map(nav => <RouterNavButton>{nav}</RouterNavButton>)}
    </div>
  )
}

export default RoutesNavigation
