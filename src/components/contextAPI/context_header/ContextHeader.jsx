import React from 'react';
import "../styles/ContextHeader.css"
import ContextButton from './ContextButton';

function ContextHeader() {    
    const buttonDetails = [
        {
            label: "User",
            path: "user",
        },
        {
            label: "User Content",
            path: "content"
        }
    ]
  return (       
        <div className="context-header">
            <nav className="context-nav">
                {buttonDetails.map((buttonDetail, index) => (<ContextButton key={index} buttonDetail={buttonDetail} />))}
            </nav>
        </div>
  )
}

export default ContextHeader;
