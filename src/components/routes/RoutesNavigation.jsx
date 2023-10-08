import React from 'react';
import "./styles/RoutesNavigation.css";
import RouterNavButton from "./RouterNavButton";
import {Outlet} from "react-router-dom";

function RoutesNavigation() {
  const navs = [
    {
      path: "home",
      label: "Home",
    },
    {
      path: "staff",
      label: "Staff",
    }, 
    {
      path: "clients",
      label: "Clients"
    },
    {
      path: "services",
      label: "Services"
    }
  ]
  return (
    <div className="routes-navigation" >
      {navs.map((nav, index) => <RouterNavButton key={index} routePath={nav.path}>{nav.label}</RouterNavButton>)}
    </div>
  )
}

export default RoutesNavigation
