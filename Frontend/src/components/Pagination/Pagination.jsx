import React from 'react';

const Pagination = ({ totalJobs, jobsPerPage, currentPage, setCurrentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (totalPages <= 1) return null; // Don't show if only 1 page

  return (
    <nav className="pagination-container">
      <button 
        className="page-btn"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>

      {pageNumbers.map(number => (
        <button
          key={number}
          className={`page-number ${currentPage === number ? 'active' : ''}`}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}

      <button 
        className="page-btn"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
