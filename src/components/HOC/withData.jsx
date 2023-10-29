import React from 'react';
import {clientsData, employeesData} from "./data";
function withData(WrappedComponent, dataSource) {
  return (props) =>{
    const data = props.person === "client"? clientsData: employeesData;
    return (
      <WrappedComponent {...props} data={data}/>
    );
  }
}

export default withData;
