import { useState, useEffect } from "react";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import Header from "../Header/Header";

function HeaderHandler() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

  const handleResize = () => {
    const it = setInterval(() => {
      setIsMobile(window.innerWidth < 900);
      clearInterval(it);
    }, 100);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <HeaderMobile/>
      ) : (
        <Header/>
      )}
    </>
  )
}

export default HeaderHandler;