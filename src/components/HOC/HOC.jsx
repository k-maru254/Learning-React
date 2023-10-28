import React from 'react'
import { Outlet } from 'react-router-dom'

function HOC() {
  return (
    <div>
      <p>
        Hello, here we are going to learn more about HOC. Lets say we have a datasource that contains clients and employees
        Clients and employees are supporse to use the same card but their contens are a bit different. Here we are going to use HOC 
        to let the data use one card
      </p>
      <Outlet/>
    </div>
  )
}

export default HOC
