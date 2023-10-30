import React from 'react';
import { Outlet } from 'react-router-dom';
import ContextHeader from './context_header/ContextHeader';
import "./styles/ContextAPI.css"

function ContextAPI() {
  return (
    <div className="context-api">
      <ContextHeader/>
      <Outlet/>
    </div>
  )
}

export default ContextAPI
