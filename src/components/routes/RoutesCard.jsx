import React from 'react';
import "./styles/RoutesCard.css";

function RoutesCard({datum, isStaff}) {
  return (
    <div className="routes-card">
      <div className="profile-image">{datum.image}</div>
      <div className="user-details">
          <div className="name"><span>{datum.initials}</span> <span>{datum.fName}</span> <span>{datum.sirName}</span></div>
          <div className="age">{datum.age} years old</div>
          <div className="department">{isStaff && `${datum.department} department`}</div>
          <div className="duties">
            <p>{isStaff? "Duties": "Service Offered"}</p>
            <ul>
                {isStaff? datum.duties.map((duty, index)=> <li key={index}>{duty}</li>):datum.servicesOffered.map((duty, index)=> <li key={index}>{duty}</li>)}
            </ul>
          </div>
      </div>
    </div>
  );
}

export default RoutesCard
