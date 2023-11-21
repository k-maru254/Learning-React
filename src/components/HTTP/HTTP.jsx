import React from 'react'
import { Outlet } from 'react-router-dom'
import HTTPHeader from './HTTPHeader'

function HTTP() {
  return (
    <>
        <HTTPHeader/>
        <Outlet/>
      
    </>
  )
}

export default HTTP
