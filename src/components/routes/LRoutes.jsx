// Create a website that has a header of home, staff, clients, services. 
// In the home's tab, there is nothing much going on (Show user that he or she is home)
// in the staff and clients tabs or components, show the images and some details of each staff and on clicking 
// it it displaus all information of a single selected item.
// On services offered, show the services offered in a list and when clicked show more details on the clicked service.
// All the changes should be shown in the link.

import React from 'react';
import RoutesNavigation from './RoutesNavigation';

function LRoutes() {
  return (
    <div className="l-routes">
      <RoutesNavigation />
    </div>
  );
}

export default LRoutes
