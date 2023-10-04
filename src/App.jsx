import React, { useState } from 'react';
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

function App() {
  const [showHeader, setShowHeader] = useState(true); 
  return (
    <>
      {showHeader && <Header/>}
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home setShowHeader={setShowHeader}/>}/>
          <Route path="/routes" element={<LRoutes/>}/>
          <Route path="/context API" element={<ContextAPI/>}/>
          <Route path="/hoc" element={<HOC/>}/>
          <Route path="/render props" element={<RenderProps/>}/>
          <Route path="/http" element={<LRoutes/>}/>
          <Route path="/internationalization" element={<Internationalization/>}/>
          <Route path="/form validation" element={<FormValidation/>}/>
          <Route path="/animation" element={<Animation/>}/>
          <Route path="*" element={<NoMatch setShowHeader={setShowHeader}/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

