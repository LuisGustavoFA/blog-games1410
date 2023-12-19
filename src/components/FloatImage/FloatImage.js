import "./FloatImage.css";
import { RxCross1 } from "react-icons/rx";

function FloatImage({ image, imgOpen, setImgOpen }) {
  
  if (imgOpen) {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  } else {
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
  }

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