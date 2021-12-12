import React from 'react'

const Search_input = () => {
    return (


        <div className="  flex justify-center items-center px-2 sm:px-4 lg:px-8">
            <div className="relative"> <input type="text" className="h-12 w-96 pr-8 pl-5 rounded-2xl z-0 focus:shadow focus:outline-none"
                placeholder="Buscar " />
                <div className="absolute top-3 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                </div>
            </div>

        </div>
    )
}

export default Search_input
