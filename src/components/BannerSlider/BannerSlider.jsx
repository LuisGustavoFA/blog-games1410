import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../database/DataApi";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import './BannerSlider.css';

function BannerSlider() {
  const [noticias, setNoticias] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderSize = 6;
  const navigate = useNavigate();

  useEffect(() => {
    getData().then((resp) => {
      setNoticias(resp);
    })
  }, []);

  const nextSlide = () => {
    currentSlide >= sliderSize ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
  }

  const lastSlide = () => {
    currentSlide === 0 ? setCurrentSlide(sliderSize) : setCurrentSlide(currentSlide - 1);
  }

  useEffect(()=> {
    const inter = setInterval(()=> {
      nextSlide();
    }, 7500);
    return () => {
      clearInterval(inter);
    };
  }, [currentSlide]);

  return (
    <div className='bannerSlider' style={{ backgroundImage: `url(${noticias[currentSlide]?.banner})` }}>
      <div className='bannerSlider-container'>
        <Link to={`/article/${noticias[currentSlide]?.title.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`} className='bannerSlider-container-title'>{noticias[currentSlide]?.title}</Link>
        <span className="banner-tags-case">
          {noticias[currentSlide]?.tags.map((tag, id) => {
            return (
              <Link className='banner-tag' key={id} to={`/search/${tag.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`}>{tag}</Link>
            )
          })}
        </span>
        <span className="banner-info">
            Por <Link to={`/search/${noticias[currentSlide]?.info.autor.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`}>{noticias[currentSlide]?.info.autor}</Link>
        </span>
        <div className="bannerSlider-container-buttons">
          <BiSolidUpArrow size={28} onClick={lastSlide} className="bannerSlider-container-arrows"></BiSolidUpArrow>
          <div 
            onClick={lastSlide} 
            style={{ backgroundImage: `url(${noticias[currentSlide === 0 ? sliderSize : currentSlide - 1]?.banner})` }}>
          </div>
          <div 
            className='bannerSlider-container-middleButton' 
            onClick={() => navigate(`/article/${noticias[currentSlide]?.title.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`)}
            style={{ backgroundImage: `url(${noticias[currentSlide]?.banner})` }}>
          </div>
          <div 
            onClick={nextSlide} 
            style={{ backgroundImage: `url(${noticias[currentSlide === sliderSize ? 0 : currentSlide + 1]?.banner})` }}>
          </div>
          <BiSolidDownArrow size={28} onClick={nextSlide} className="bannerSlider-container-arrows"></BiSolidDownArrow>
        </div>
      </div>
    </div>
  )
}

export default BannerSlider;