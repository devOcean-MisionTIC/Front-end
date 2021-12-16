import { useUser } from 'context/userContext';
import React from 'react';

const PrivateComponent = ({ roleList, children }) => {
  const { userData } = useUser();

  if (roleList.includes(userData.rol)) {
    return children;

  } 

  return <div data-testid='private-component-noauth'>NO ESTAS AUTORIZADO</div>;
};

export default PrivateComponent;