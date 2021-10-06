import React from "react";
import "./Pagination.css";
function Pagination({ productPerPage, totalProducts, paginate }) {
  const pageNamber = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNamber.push(i);
  }

  return (
    <div>
      <div className="pagination">
        {pageNamber.map((el) => (
          <span className="ul" onClick={() => paginate(el)} key={el}>
            {el}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
