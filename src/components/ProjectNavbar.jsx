import React from 'react'

import { NavLink } from 'react-router-dom'
const ProjectNavbar = () => {
    return (
        <div className="relative h-16 flex flex-row bg-gray-100 w-full align-center justify-start mt-6 border-b-2 ">
        
        <NavLink to ='/proyectos/'
       >
        <button class="text-blue-800 py-4 px-4 block hover:text-blue-400 hover:bg-gray-200 focus:outline-none font-medium border-blue-800 rounded-full h-14 w-14 align-center justify-center">
        <i class="fas fa-angle-left fa-2x"></i> </button>
        </NavLink>
       
            <span className="text-lg text-blue-800 text-3xl ml-2 mr-5 pt-2 font-bold ">Proyecto # 1</span>
           
        
            <nav class="flex flex-col sm:flex-row ml-5 text-lg gap-1">
            <NavLink to ='/proyectos/proyecto/info'  
         className={({ isActive }) =>
         isActive
           ? 'text-blue-800 border-blue-800 focus:outline-none border-b-4 '
           : 'text-gray-600 border-b-4 '
       }>
        <button class=" py-4 px-6 block hover:text-blue-800 focus:outline-none  font-medium">
         <i class="fas fa-info-circle"></i> Información
        </button>  
        </NavLink> 
            <NavLink to ='/proyectos/proyecto/avances'
           className={({ isActive }) =>
           isActive
             ? 'text-blue-800 border-blue-800 focus:outline-none border-b-4 '
             : 'text-gray-600 border-b-4 '
         } >
        <button class="py-4 px-6 mx-2 block hover:text-blue-800 focus:outline-none   font-medium ">
        <i class="far fa-file-alt"></i>   Avances
        </button>
        </NavLink>
        
        <NavLink to ='/proyectos/proyecto/estudiantes'
         className={({ isActive }) =>
         isActive
           ? 'text-blue-800 border-blue-800 focus:outline-none border-b-4 '
           : 'text-gray-600 border-b-4 '
       }>
        <button class="py-4 px-6  mx-2 block hover:text-blue-800 focus:outline-none  font-medium">
        <i class="far fa-address-card"></i>  Estudiantes
        </button>
        </NavLink>
    </nav>
        </div>
    )
}

export default ProjectNavbar