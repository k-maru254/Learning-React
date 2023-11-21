import React from 'react';
import "./styles/PersonCard.css";

function PersonCard({personData, personType}) {

  const clientInfo =(
    <div className="client-info">
      <p>{`${personData.regDate} `}</p>
      <p>{`${personData.lastVisit}`}</p>
    </div>
  )
  
  const employeeInfo =(
    <div className="client-info">
      <p>{`${personData.department} `}</p>
    </div>
  )

  return (
    <div className="person-card">
      <div className="image">
        Image
      </div>
      <div className="person-info">
        <p>{`${personData.firstName} ${personData.lastName}`}</p>
        {personType === "employee"? employeeInfo: clientInfo}
      </div>
    </div>
  )
}

export default PersonCard
