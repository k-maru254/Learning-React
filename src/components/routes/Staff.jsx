import React from 'react';
import { useParams } from 'react-router-dom';

function Staff({data}) {
    const {userId} = useParams();
    let selectedData = data.filter(datum => datum.id == userId)[0];
  return (
    <div>
      {`Showing ${selectedData.fName} ${selectedData.sirName}`
    }
    </div>
  );
}

export default Staff;
