import React from 'react'
import HOCPersonsList from './HOCPersonsList'
import withData from './withData'

function HOCClients() {
  const ClientListWithData = withData(HOCPersonsList)
  return (
    <>
      <ClientListWithData person="client"/>
    </>
  )
}

export default HOCClients
