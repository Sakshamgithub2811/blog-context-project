import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {

  const {page,handlePageChange,totalPages,darkMode,toggleDarkMode} = useContext(AppContext);
  return ( 
    <div>
      <div >
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

        <p>
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
