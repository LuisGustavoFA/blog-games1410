import HeaderMobile from "../HeaderMobile/HeaderMobile";
import Header from "../Header/Header";
import IsMobileHandler from "../IsMobileHandler/IsMobileHandler";

function HeaderHandler() {
  const isMobile = IsMobileHandler();

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