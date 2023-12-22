import { useEffect } from "react";
import "./FloatImage.css";
import { RxCross1 } from "react-icons/rx";

function FloatImage({ image, imgOpen, setImgOpen }) {
  useEffect(()=>{
    if (imgOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
    return () => {
      document.body.style.overflow = 'visible';
    }
  }, [imgOpen]);

  return (
    <>
      {imgOpen &&
        <>
          <RxCross1 className="cross" size={32} onClick={() => setImgOpen(false)} />
          <div className="float-image" style={{backgroundImage: `url('${image}')`}}></div>
        </>
      }
    </>
  )
}

export default FloatImage;