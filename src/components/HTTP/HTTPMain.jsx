import React from 'react'
import { Outlet } from 'react-router-dom'

function HTTPMain() {
  return (
    <div className="http-main">
       <Outlet/>
    </div>
  )
}

export default HTTPMain
