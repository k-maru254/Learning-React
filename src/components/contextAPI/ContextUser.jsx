import React from 'react';
import {useUser} from "./UserProvider"

function ContextUser() {
    const {userData} = useUser();
  return (
    <div>
      {`Hello ${userData.name}`}
    </div>
  )
}

export default ContextUser
