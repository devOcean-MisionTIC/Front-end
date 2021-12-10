import { useUser } from 'context/userContext';
import React from 'react';

const PrivateComponent = ({ roleList, children }) => {
  const { userData } = useUser();
  console.log('userData',userData)
  if (roleList.includes(userData.rol) 
   ) {
    return children;

  } 

  return <></>;
};

export default PrivateComponent;