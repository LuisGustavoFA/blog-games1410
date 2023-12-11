import "./FloatImage.css";

function FloatImage({image}) {
  
  return (
    <div className="float-image" style={{ backgroundImage: `url('${image}')` }}></div>
  )
}

export default FloatImage;