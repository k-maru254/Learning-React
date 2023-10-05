import React from 'react';
import {Outlet} from "react-router-dom";
import "../styles/Layout.css"

function Layout() {
  return (
    <main>
        <Outlet/>
    </main>
  );
}

export default Layout;
