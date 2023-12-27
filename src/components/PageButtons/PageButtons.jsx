import React from 'react';
import "./PageButtons.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function PageButtons({page, setPage, maxPages, scrollto}) {

  const scrollBack = () => {
    scrollto.scrollIntoView();
    window.scrollBy(0, -80);
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
      numbers.push(<div className="pageButtons-number" key={i} onClick={()=> changePage(i)}>{i}</div>)
    }
    return numbers;
  }

  return (
    <div className="pageButtons">
      <FaArrowLeft size={28} className='pageButtons-arrows' onClick={() => page > 1 ? changePage(page - 1) : ""} />
      <div className="pageButtons-numbers">
        {renderPageNumbers()}
      </div>
      <FaArrowRight size={28} className='pageButtons-arrows' onClick={() => page < maxPages ? changePage(page + 1) : ""} />
    </div>
  )
}

export default PageButtons;