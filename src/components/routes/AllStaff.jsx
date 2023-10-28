import React from 'react';
import {Link} from "react-router-dom";
import RoutesCard from './RoutesCard';

function AllStaff({data, isStaff}) {
  return (
    <div>      
        {data.map((datum) =>{
            return (
            <Link key={datum.id} className="routes-staff-link" to={`${datum.id}`}>
                <RoutesCard isStaff={isStaff} datum={datum}/>
            </Link>
            )
        })}
    </div>
  )
}

export default AllStaff;
