import React, { useEffect, useState } from "react";
import { getData } from "../../database/DataApi";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import './BannerSlider.css';

function BannerSlider() {
  const [noticias, setNoticias] = useState([]);
  const [actualSlide, setActualSlide] = useState(0);
  const sliderSize = 6;

  useEffect(() => {
    getData().then((resp) => {
      setNoticias(resp);
    })
  }, []);

  const nextSlide = () => {
    actualSlide >= sliderSize ? setActualSlide(0) : setActualSlide(actualSlide + 1);
  }

  const lastSlide = () => {
    actualSlide === 0 ? setActualSlide(sliderSize) : setActualSlide(actualSlide - 1);
  }

  useEffect(()=> {
    const inter = setInterval(()=> {
      nextSlide();
    }, 7500);
    return () => {
      clearInterval(inter);
    };
  }, [actualSlide]);

  return (
    <div className='bannerSlider' style={{ backgroundImage: `url(${noticias[actualSlide]?.banner})` }}>
      <div className='bannerSlider-container'>
        <Link to={`/article/${noticias[actualSlide]?.title.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`} className='bannerSlider-container-title'>{noticias[actualSlide]?.title}</Link>
        <span className="banner-tags-case">
            {noticias[actualSlide]?.tags.map((tag, id) => {
              return (
                <Link className='banner-tag' key={id} to={`/search/${tag.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`}>{tag}</Link>
              )
            })}
          </span>
        <div className="bannerSlider-container-buttons">
          <BiSolidUpArrow size={28} onClick={lastSlide} className="bannerSlider-container-arrows"></BiSolidUpArrow>
          <div 
            onClick={lastSlide} 
            style={{ backgroundImage: `url(${noticias[actualSlide === 0 ? sliderSize : actualSlide - 1]?.banner})` }}>
          </div>
          <div 
            className='bannerSlider-container-middleButton' 
            onClick={() =>  window.location.href=`/article/${noticias[actualSlide]?.title.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`}
            style={{ backgroundImage: `url(${noticias[actualSlide]?.banner})` }}>
          </div>
          <div 
            onClick={nextSlide} 
            style={{ backgroundImage: `url(${noticias[actualSlide === sliderSize ? 0 : actualSlide + 1]?.banner})` }}>
          </div>
          <BiSolidDownArrow size={28} onClick={nextSlide} className="bannerSlider-container-arrows"></BiSolidDownArrow>
        </div>
      </div>
    </div>
  )
}

export default BannerSlider;