import "./FloatImage.css";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsZoomIn, BsZoomOut } from "react-icons/bs";

function FloatImage({ image, isOpen, setOpen }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [ziIconColor, setZiIconColor] = useState("white")
  const [zoIconColor, setZoIconColor] = useState("gray")
  
  if (isOpen) {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  } else {
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
  }

  const handleZoomIn = () => {
    setZoomLevel(prevZoom => (prevZoom < 3 ? prevZoom + .5 : 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prevZoom => (prevZoom > 1 ? prevZoom - .5 : 1));
  };

  useEffect(()=> {
    zoomLevel === 1 ? setZoIconColor("gray") : setZoIconColor("white");
    zoomLevel === 3 ? setZiIconColor("gray") : setZiIconColor("white");
  }, [zoomLevel]);

  return (
    <>
      {isOpen &&
        <>
          <RxCross1 className="cross" size={32} onClick={() => setOpen(false)} />
          <div className="zoom-icons">
            <BsZoomOut size={32} onClick={handleZoomOut} style={{color: `${zoIconColor}`}}/>
            <BsZoomIn size={32} onClick={handleZoomIn} style={{color: `${ziIconColor}`}}/>
          </div>
          <div className="float-image" style={{
            backgroundImage: `url('${image}')`,
            transform: `scale(${zoomLevel})`
          }}></div>
        </>
      }
    </>
  )
}

export default FloatImage;