import React from 'react'
import HOCPersonsList from './HOCPersonsList'
import withData from './withData'

function HOCEmployees() {
  const EmployeesListWithData = withData(HOCPersonsList)
  return (
    <>
      <EmployeesListWithData person="employee"/>
    </>
  )
}

export default HOCEmployees
