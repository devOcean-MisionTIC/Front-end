
import ProjectNavbar from 'components/ProjectNavbar'
import AdvancesTable from 'components/AdvancesTable'
import React from 'react'
import Search_input from 'components/Search_input'
import New_advance_modal from 'components/New_advance_modal'
import { useState } from 'react'

const AdvancesDashboard = () => {
    const [openNewAdvanceModal, setNewAdvanceModal]= useState(false);
    return (
        <div className="w-full h-full flex flex-col overflow-y-hidden " >
   <ProjectNavbar/>
   <div className="flex flex-row  ml-0 justify-start mt-8">
              <Search_input></Search_input>
              <div className="  flex justify-center items-center px-4 sm:px-6 lg:px-8 mr-16">
                    <div className="flex flex-rows-2 relative align-center justify-center  bg-white rounded-2xl ">
                        <select className="h-10 w-50 pr-8 pl-5 text-lg text-gray-400 rounded-2xl z-0 focus:shadow focus:outline-none border-gray-100" defaultValue="alfabetic">
                            <option  className="text-gray-400" value="alfabetic" >Ordenar por A-Z</option>
                            <option className="text-gray-400" value="recent">Más recientes </option>
                            <option className="text-gray-400" value="older">Más antiguos</option>
                        
                        </select>
                    </div>
                </div>
                </div>
    <AdvancesTable setModal={setNewAdvanceModal}></AdvancesTable>
    {openNewAdvanceModal && <New_advance_modal setOpenModal={setNewAdvanceModal}></New_advance_modal>}
    </div>

    )
    
}



export default AdvancesDashboard
