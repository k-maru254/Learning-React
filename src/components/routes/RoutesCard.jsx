import React from 'react';
import "./styles/RoutesCard.css";

function RoutesCard({staffData}) {
    console.log(staffData);
  return (
    <div className="routes-card">
      <div className="profile-image">Profile eimage</div>
      <div class="user-details">
          <div className="name"><span>Initials</span> <span>fName</span> <span>sirName</span></div>
          <div className="age">Age</div>
          <div className="department">Department</div>
          <div className="duties">Staff duties</div>
      </div>
    </div>
  );
}

export default RoutesCard
