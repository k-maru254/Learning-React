import React, {useContext, createContext, useState} from 'react';

const userContext = createContext(undefined);

export const UserProvider = ({children}) => {
    const [userData] = useState({
        name: "Kimani",
        age: 23
    })
  return (
   <userContext.Provider value={{userData}}>{children}</userContext.Provider>
  )
}

export const useUser = () => useContext(userContext);