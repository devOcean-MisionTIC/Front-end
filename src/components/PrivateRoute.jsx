import { useUser } from 'context/userContext';
import React from 'react';

const PrivateRoute = ({ roleList, children }) => {
  const { userData } = useUser();
  

  if (roleList.includes(userData.rol) && userData.estado==="AUTORIZADO") {
   
    return children;
    
  }else if(roleList.includes(userData.rol) && userData.estado ==='PENDIENTE'){
    return <div data-testid='pending-approval' className='fixed top-1/3 right-1/4 ml-8'>
              <div  className='flex flex-col w-full ml-32 h-52 bg-transparent text-5xl text-blue-700 items-center justify-center rounded-md border-2'>
                <i className="fas fa-lock"></i>
                En espera de autorización de administrador...     
                
              </div>
           </div>;
              
  }

  return <div className='fixed top-1/3 right-1/4 ml-8'>
          <div data-testid='not-authorized' className='flex flex-col w-full ml-32 h-52 bg-transparent text-5xl text-blue-700 items-center justify-center rounded-md border-2'>
            <i className="fas fa-ban"/>
            No estás autorizado para ver este sitio.            
        </div>
        </div>
};

export default PrivateRoute;