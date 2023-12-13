import "./FloatImage.css";
import { RxCross1 } from "react-icons/rx";

function FloatImage({ image, isOpen, setOpen }) {
  
  if (isOpen) {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  } else {
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
  }

  return (
    <>
      {isOpen &&
        <>
          <RxCross1 className="cross" size={32} onClick={() => setOpen(false)} />
          <div className="float-image" style={{backgroundImage: `url('${image}')`}}></div>
        </>
      }
    </>
  )
}

export default FloatImage;