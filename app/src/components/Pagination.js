import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {

  const {page,handlePageChange,totalPages} = useContext(AppContext);
  return ( 
    <div>
      <div>
        {
          page>1 &&
          <button n className="rounded-md border p-x-4 p-y-2" onClick={()=>handlePageChange(page-1)} >
            Previous
          </button>
        }
         {
          page< totalPages &&
          <button onClick={()=>handlePageChange(page+1)}>
            Next
          </button>
        }

        <p>
          Page{page} of {totalPages}
        </p>

      </div>
      
    </div>
  )
}

export default Pagination
