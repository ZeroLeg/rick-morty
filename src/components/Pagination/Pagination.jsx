import React from 'react'

export const Pagination = ({fetchData, pagination, setPagination}) => {



  const handlePrev = () => {
    pagination > 1 && setPagination(pagination - 1);
    fetchData();
  }

  const handleNext = () => {
    setPagination(pagination + 1);
    fetchData();
  }

  return (
    <nav aria-label="...">
        <ul className="pagination justify-content-end">
            <li className="page-item">
            <button onClick={handlePrev} className="page-link">Previous</button>
            </li>
            <li className="page-item">
            <button onClick={handleNext} className="page-link" >Next</button>
            </li>
        </ul>
    </nav>
  )
}
