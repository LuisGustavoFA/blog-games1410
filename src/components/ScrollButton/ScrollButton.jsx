import React, { useEffect, useState } from 'react';
import "./ScrollButton.css";
import { scrollTop } from '../../functions/scrolltop';
import { IoIosArrowUp } from "react-icons/io";

function ScrollButton() {
  const [active, setActive] = useState(false);
  
  const handleActivation = () => {
    if (window.scrollY > 300) setActive(true);
    else setActive(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleActivation);
    return () => {
      window.removeEventListener("scroll", handleActivation);
    };
  }, []);

  return (
    <div className={`scrollbutton-case${active ? ' active' : ""}`} onClick={scrollTop}>
      <IoIosArrowUp className='scrollbutton-icon' size={48}/>
    </div> 
  )
}

export default ScrollButton;