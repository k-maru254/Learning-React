import React from 'react';
import { Outlet } from 'react-router-dom';
import HOCHeader from './HOCHeader';
import "./Styles/HOC.css";

function HOC() {
  return (
    <div className='hoc'>
     <div className="hoc-wrapper">
      <HOCHeader />
      <Outlet/>
     </div>
    </div>
  );
}

export default HOC;
