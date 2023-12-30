import React from 'react';
import "./PageButtons.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function PageButtons({page, setPage, maxPages}) {

  const scrollBack = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  const changePage = (toPage) => {
    if (toPage !== page) {
      setPage(toPage);
      scrollBack();
    }
  }

  const renderPageNumbers = () => {
    const numbers = [];
    for (let i=1; i<=maxPages; i++) {
      numbers.push(<div className={`pageButtons-number ${i === page ? " active" : ""}`} key={i} onClick={()=> changePage(i)}>{i}</div>)
    }
    return numbers;
  }

  return (
    <div className="pageButtons">
      <FaArrowLeft size={32} className={`pageButtons-arrows ${page > 1 ? "" : " faded"}`} onClick={() => page > 1 ? changePage(page - 1) : ""} />
      <div className="pageButtons-numbers">
        {renderPageNumbers()}
      </div>
      <FaArrowRight size={32} className={`pageButtons-arrows ${page < maxPages ? "" : " faded"}`} onClick={() => page < maxPages ? changePage(page + 1) : ""} />
    </div>
  )
}

export default PageButtons;