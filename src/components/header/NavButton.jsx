import React from 'react';
import "../../styles/NavButton.css";

function NavButton({children}) {
  return (
    <div className="nav-button">
      {children}
    </div>
  );
}

export default NavButton;
