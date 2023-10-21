import React, {useState} from 'react';
import RoutesCard from './RoutesCard';
import "./styles/RoutesStaff.css";
import {Link, Outlet, Route, Routes, useLocation} from "react-router-dom";
import Staff from './Staff';
import AllStaff from './AllStaff';

function RoutesStaff() {
  const allStaff = [
    {
      id: 1,
      image: "image",
      fName: "Jack",
      sirName: "Ma",
      age: 20,
      gender: "Male",
      initials: "Mr.",
      department: "GIS",
      duties: [
        "Oversee all afairs involving employees",
        "Service 2",
        "Service 3"
      ]
    },
    {
      id: 2,
      image: "image",
      fName: "Annah",
      sirName: "Voloso",
      age: 23,
      gender: "Female",
      initials: "Mrs.",
      department: "GIS",
      duties: [
        "Oversee all afairs involving employees",
        "Service 2",
        "Service 3"
      ]    },
    {
      id: 3,
      image: "image",
      fName: "Zacharie",
      sirName: "Achilis",
      age: 44,
      gender: "Male",
      initials: "Dr.",
      department: "GIS",
      duties: [
        "Oversee all afairs involving employees",
        "Service 2",
        "Service 3"
      ]
    },
    {
      id: 4,
      image: "image",
      fName: "Henreas",
      sirName: "Chan",
      age: 36,
      gender: "Female",
      initials: "Miss",
      department: "Human resourse",
      duties: [
        "Oversee all afairs involving employees",
        "Service 2",
        "Service 3"
      ]
    }
  ];

  const allClients = [
    {
      id: 1,
      image: "image",
      fName: "Jackson",
      sirName: "Kosgei",
      age: 36,
      gender: "Male",
      initials: "Dr.",
      hobies: ["Cycling,", "Running", "Playing chess"],
      servicesOffered:[
        "Massage",
        "Shaving",
        "Hot Bath"
      ]
    },
    {
      id: 2,
      image: "image",
      fName: "Jackson",
      sirName: "Kosgei",
      age: 36,
      gender: "Male",
      initials: "Dr.",
      hobies: ["Cycling,", "Running", "Playing chess"],
      servicesOffered:[
        "Massage",
        "Shaving",
        "Hot Bath"
      ]
    },
    {
      id: 3,
      image: "image",
      fName: "Jackson",
      sirName: "Kosgei",
      age: 36,
      gender: "Male",
      initials: "Dr.",
      hobies: ["Cycling,", "Running", "Playing chess"],
      servicesOffered:[
        "Massage",
        "Shaving",
        "Hot Bath"
      ]
    },
    {
      id: 4,
      image: "image",
      fName: "Jackson",
      sirName: "Kosgei",
      age: 36,
      gender: "Male",
      initials: "Dr.",
      hobies: ["Cycling,", "Running", "Playing chess"],
      servicesOffered:[
        "Massage",
        "Shaving",
        "Hot Bath"
      ]
    }
  ]
  const path = useLocation();
  const isStaff = path.pathname.split("/").includes("staff");
  const data = isStaff? allStaff : allClients;
  
  return (
    <div className="routes-staff">
      <h2 className="page-title">{isStaff? "Staff": "Clients"}</h2>
      <Routes>
        <Route index element={<AllStaff isStaff={isStaff} data={data}/>}/>
        <Route path=":userId" element={<Staff isStaff={isStaff} data={data}/>}/>
      </Routes>
      <Outlet/>
    </div>
  );
}

export default RoutesStaff;
