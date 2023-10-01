import React from 'react';
import NavButton from './NavButton';
import "../../styles/NavBar.css";

function NavBar() {

    const navNames = ["Routes", "Context API", "HOC","Render props", "HTTP", "Internationalization", "Form validation", "Animation", "Axios"];
    const routes = [
        {
            label: "Routes",
            path: "/routes"
        },
        {
            label: "Context API",
            path: "/context API"
        },
        {
            label: "HOC",
            path: "/hoc"
        },
        {
            label: "Render Props",
            path: "/render props"
        },
        {
            label: "HTTP",
            path: "/http"
        },
        {
            label: "Internationalization",
            path: "/internationalization"
        },
        {
            label: "Form Validation",
            path: "/form validation"
        },
        {
            label: "Animation",
            path: "/animation"
        }
    ]
    const buttonStyle = {
        flex: `1 1 calc(100% / ${navNames.length})`
    };

    return (
        <nav className="nav-bar">
        {routes.map((route, index) =><NavButton key={index} routePath={route.path} style={buttonStyle}>{route.label}</NavButton>)}        
        </nav>
  );
}

export default NavBar;
