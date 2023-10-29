import React from 'react';
import { Outlet } from 'react-router-dom';
import "./styles/HOCMain.css";

function HOCMain() {
  return (
    <div className="hoc-main">
      <Outlet/>
    </div>
  )
}

export default HOCMain
