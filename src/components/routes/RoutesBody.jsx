import React from 'react';
import {Outlet} from "react-router-dom";

function RoutesBody({children}) {
  return (
    <div>
      {children}
    </div>
  );
}

export default RoutesBody
