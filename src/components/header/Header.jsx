import React, { forwardRef } from 'react';
import NavButton from './NavButton';
import "../../styles/header.css"
import Logo from './Logo';
import Search from './Search';
import NavBar from './NavBar';

const navElements = ["Routes", "Context API", " HOC", "Hooks", "Render", "HTTP", "Internationalization", "Form Validation", "Animation"];

const Header = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="header" {...props}>
        <div className="logo-search">
          <Logo className="logo"/>
          <Search className="search"/>
        </div>
        <NavBar/>
    </div>
  )
})

export default Header
