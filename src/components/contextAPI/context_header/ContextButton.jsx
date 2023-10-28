import React from 'react';
import {NavLink} from "react-router-dom";
import "../styles/ContextButton.css";

function contextButton({buttonDetail}) {
    const activeButton = ({isActive}) => (isActive? {
                background: "white",
                border: "darkblue 1px solid",
                borderBottom: "none",
                borderRadius: "8px 8px 0 0"
            }: {})
    
  return (
    <NavLink className="context-button" to={buttonDetail.path} style={activeButton}>{buttonDetail.label}</NavLink>
  );
}

export default contextButton;
