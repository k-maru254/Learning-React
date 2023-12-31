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
import HTTPHome  from "./components/HTTP/HTTPHome";
import Internationalization from "./components/internationalization/Internationalization";
import FormValidation from "./components/formValidation/FormValidation";
import Animation from "./components/animation/Animation";
import NoMatch from './components/NoMatch';
import LeftAside from './components/LeftAside';
import RoutesHome from './components/routes/RoutesHome'
import RoutesStaff from './components/routes/RoutesStaff';
import UserContent from './components/contextAPI/UserContent';
import ContextHome from './components/contextAPI/ContextHome';
import ContextUser from './components/contextAPI/ContextUser';
import ContextWrapper from './components/contextAPI/ContextWrapper';
import HOCClients from './components/HOC/HOCClients';
import HOCEmployees from './components/HOC/HOCEmployees';
import HOCHome from './components/HOC/HOCHome';
import HOCMain from './components/HOC/HOCMain';
import HTTP from './components/HTTP/HTTP';
import HTTPRegister from './components/HTTP/HTTPRegister';
import HTTPMain from './components/HTTP/HTTPMain';

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
            <Route path="/context API" element={<ContextAPI/>}>              
              <Route element={<ContextWrapper/>}>              
                <Route index element={<ContextHome/>}/>
                <Route path="user" element={<ContextUser/>}/>
                <Route path="content" element={<UserContent/>}/>
              </Route>
            </Route>
            <Route path="/hoc" element={<HOC/>}>
              <Route index element={<HOCHome/>}/>
              <Route element={<HOCMain/>}>
                <Route path="clients" element={<HOCClients/>}/>
                <Route path="employees" element={<HOCEmployees/>}/>
              </Route>
            </Route>
            <Route path="/render props" element={<RenderProps/>}/>
            <Route path="http" element={<HTTP/>}>
              <Route element={<HTTPMain/>}>
                <Route index element={<HTTPHome/>}/>
                <Route path="home" element={<HTTPHome/>}/>
                <Route path="register" element={<HTTPRegister/>}/>
              </Route>
            </Route>
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

