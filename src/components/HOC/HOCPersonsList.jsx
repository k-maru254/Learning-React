import React from 'react'
import PersonCard from './PersonCard'

function HOCPersonsList({data, person}) {
  return (
    <>
      {data.map((personData, index)=>
        <PersonCard key={index} personData={personData} personType={person}/>
      )}
    </>
  )
}

export default HOCPersonsList
