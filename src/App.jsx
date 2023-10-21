import React, { useEffect, useRef, useState } from 'react';
import Header from './components/header/Header';
import "./styles/app.css";
import {Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import LRoutes from "./components/routes/lRoutes"
import Home from './components/Home';
import ContextAPI from "./components/contextAPI/ContextAPI";
import HOC from "./components/HOC/HOC";
import RenderProps from "./components/renderProps/RenderProps";
import HTTP  from "./components/HTTP/HTTP";
import Internationalization from "./components/internationalization/Internationalization";
import FormValidation from "./components/formValidation/FormValidation";
import Animation from "./components/animation/Animation";
import NoMatch from './components/NoMatch';
import LeftAside from './components/LeftAside';
import RoutesHome from './components/routes/RoutesHome'
import RoutesStaff from './components/routes/RoutesStaff';
import Staff from './components/routes/Staff';

function App() {
  const [showHeader, setShowHeader] = useState(true); 
  const headerRef = useRef(null);  
  const [headerHeight, setHeaderHeight] = useState(0)
  useEffect(
    () => {
      headerRef.current? setHeaderHeight(headerRef.current.clientHeight): setHeaderHeight(0);
    }, [headerHeight, showHeader]
  );

  const wraperHeight = {
    height: `calc(100vh - ${headerHeight}px)`
  }

  return (
    <>
      {showHeader && <Header ref={headerRef} />}

      <div style={wraperHeight} className="body-wraper">
      {showHeader && <LeftAside/>}
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home setShowHeader={setShowHeader}/>}/>
            <Route path="/routes" element={<LRoutes/>}>
              <Route index element={<RoutesHome/>}/>
              <Route path="home" element={<RoutesHome/>}/>
              <Route path="staff/*" element={<RoutesStaff/>}/>
              <Route path="clients/*" element={<RoutesStaff/>}/>
            </Route>
            <Route path="/context API" element={<ContextAPI/>}/>
            <Route path="/hoc" element={<HOC/>}/>
            <Route path="/render props" element={<RenderProps/>}/>
            <Route path="/http" element={<HTTP/>}/>
            <Route path="/internationalization" element={<Internationalization/>}/>
            <Route path="/form validation" element={<FormValidation/>}/>
            <Route path="/animation" element={<Animation/>}/>
            <Route path="*" element={<NoMatch setShowHeader={setShowHeader}/>}/>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App

