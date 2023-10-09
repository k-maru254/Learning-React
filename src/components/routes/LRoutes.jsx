// Create a website that has a header of home, staff, clients, services. 
// In the home's tab, there is nothing much going on (Show user that he or she is home)
// in the staff and clients tabs or components, show the images and some details of each staff and on clicking 
// it it displaus all information of a single selected item.
// On services offered, show the services offered in a list and when clicked show more details on the clicked service.
// All the changes should be shown in the link.

import React from 'react';
import RoutesNavigation from './RoutesNavigation';
import "./styles/LRoutes.css"
import RoutesBody from './RoutesBody';
import RoutesHome from './RoutesHome';
import { Outlet } from 'react-router-dom';

function LRoutes() {
  return (
    <div className="l-routes">
      <div style={{display:"flex", justifyContent:"right"}}>
        <RoutesNavigation />
      </div>
      <Outlet/>
    </div>
  );
}

export default LRoutes
