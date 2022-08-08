import React from 'react'
import './../styles/Pagination.css'

export const Pagination = ({totalCount, perPage, currentPage, setCurrentPage}) => {
  let pageNumbers = [];
  const maxGithubRetrieval = 1000;

  const handlePageChange = (number) => {
    setCurrentPage(number)
  }

  for (let i = 1; i <= Math.ceil(totalCount / perPage); i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length > 5) {
    const lastPage = Math.ceil(maxGithubRetrieval / perPage);
    if (pageNumbers.length > lastPage) {
      pageNumbers = pageNumbers.slice(0, lastPage);
    }

    const lastPageIdx = pageNumbers[pageNumbers.length - 1]
      
    
    return (
      <ul className="pagination">
        <li className="page-item">
          {/* <button onClick={handlePageChange(currentPage-1)}>Previous</button> */}
        </li>
        {pageNumbers.slice(0, 3).map(number => <li key={number} className="page-item">
                <button onClick={() => setCurrentPage(number)}>{number}</button>
              </li>)}
        <li>...</li>
        <li className="page-item" >
          <button onClick={() => setCurrentPage(lastPageIdx)}>{lastPageIdx}</button>
        </li>
        <li className="page-item">
          <button>Next</button>
        </li>
      </ul>
      
    )
  }

  return (
    <>
      <ul className="pagination" >
        {pageNumbers.map(pageNumber => (
              <li key={pageNumber} className="page-item" style={{display:"none"}} >
                <button style={{display:"none"}} onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</button>
              </li>
        ))}
      </ul>
    </>
  )
}
