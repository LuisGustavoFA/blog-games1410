import "./FloatImage.css";

function FloatImage({image, isOpen}) {
  
  return (
    <>
      {isOpen && 
        <div className="float-image" style={{ backgroundImage: `url('${image}')` }}></div>
      }
    </>
  )
}

export default FloatImage;