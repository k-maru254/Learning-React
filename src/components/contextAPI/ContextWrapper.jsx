import React from 'react'
import { Outlet } from 'react-router-dom';
import {UserProvider} from "./UserProvider";
function ContextWrapper() {
  return (
    <UserProvider>
    <Outlet/>
    </UserProvider>
  )
}

export default ContextWrapper
