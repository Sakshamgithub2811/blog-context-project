import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {

  const {page,handlePageChange,totalPages,darkMode,toggleDarkMode} = useContext(AppContext);
  return ( 
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white' >
      <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
        <div className='flex gap-x-2'>
        {
          page>1 &&
          <button className=" border-2 px-2 rounded-md border p-x-4 p-y-2" onClick={()=>handlePageChange(page-1)} >
            Previous
          </button>
        }
        {
          page< totalPages &&
          <button className="border-2 px-2 rounded-md border p-x-4 p-y-2" onClick={()=>handlePageChange(page+1)}>
            Next
          </button>
        }

        </div>
       

        <p className='font-bold text-sm '>
          Page{page} of {totalPages}
        </p>

        <button onClick={toggleDarkMode} className={`bg-gray-200 dark:bg-gray-800 ${darkMode ? 'text-white' : 'text-black'}`}>
          {darkMode ?"DRK":"LIT"  }
          ${darkMode}
   
        </button>
       



      </div>
      
    </div>
  )
}

export default Pagination
