import React from 'react';
import NavButton from './NavButton';
import "../../styles/NavBar.css";

function NavBar() {

    const navNames = ["Routes", "Context API", "HOC","Render props", "HTTP", "Internationalization", "Form validation", "Animation", "Axios"];
    const buttonStyle = {
        flex: `1 1 calc(100% / ${navNames.length})`
    };

    return (
        <div className="nav-bar">
        {navNames.map(navName =><NavButton style={buttonStyle}>{navName}</NavButton>)}        
        </div>
  )
}

export default NavBar
