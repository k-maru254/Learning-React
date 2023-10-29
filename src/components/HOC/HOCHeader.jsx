import React from 'react';
import HOCNavs from './HOCNavs';
import "./styles/HOCHeader.css";

function HOCHeader() {
  return (
    <div className="hoc-header">
      <HOCNavs/>
    </div>
  )
}

export default HOCHeader
