import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {

  const {page,handlePageChange,totalPages,darkMode,toggleDarkMode} = useContext(AppContext);
  return ( 
    <div className='w-full flex justify-center items-center border py-2 '>
      <div className='flex justify-between w-11/12 max-w-[670]' >
       <div className='flex gap-x-5'>
       {
          page>1 &&
          <button  className="rounded-md border p-x-4 p-y-2" onClick={()=>handlePageChange(page-1)} >
            Previous
          </button>
        }
        {
          page< totalPages &&
          <button className="rounded-md border p-x-4 p-y-2" onClick={()=>handlePageChange(page+1)}>
            Next
          </button>
        } 
       </div>

        <p className='font-bold text-sm '>
          Page{page} of {totalPages}
        </p>

        <button onClick={toggleDarkMode} className={`bg-gray-200 text-black dark:bg-gray-800 dark:text-white }`}>
          {darkMode ?"DRK":"LIT"  }
         
   
        </button>
       



      </div>
      
    </div>
  )
}

export default Pagination
