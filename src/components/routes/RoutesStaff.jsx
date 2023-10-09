import React from 'react';
import RoutesCard from './RoutesCard';
import "./styles/RoutesStaff.css";

function RoutesStaff() {
  const allStaff = [
    {
      id: 1,
      image: "image",
      fName: "Jack",
      sirName: "Ma",
      age: 20,
      gender: "Male",
      initials: "Mr."
    },
    {
      id: 2,
      image: "image",
      fName: "Annah",
      sirName: "Voloso",
      age: 23,
      gender: "Female",
      initials: "Mrs."
    },
    {
      id: 3,
      image: "image",
      fName: "Zacharie",
      sirName: "Achilis",
      age: 44,
      gender: "Male",
      initials: "Dr."
    },
    {
      id: 4,
      image: "image",
      fName: "Henreas",
      sirName: "Chan",
      age: 36,
      gender: "Female",
      initials: "Miss"
    }
  ];
  return (
    <div className="routes-staff">
      {allStaff.map((singleStaff) =>{
        
        return <RoutesCard key={singleStaff.id} staffData={singleStaff}/>
      })}
    </div>
  );
}

export default RoutesStaff;
