import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../database/DataApi";
import { BiSolidUpArrow, BiSolidDownArrow, BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import './BannerSlider.css';
import TagsCase from "../TagsCase/TagsCase";
import { format } from "../../functions/format";
import { calctime } from "../../functions/calctime";

function BannerSlider() {
  const [noticias, setNoticias] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pageVisible, setPageVisible] = useState(true);
  const sliderSize = 6;
  const navigate = useNavigate();

  useEffect(() => {
    getData('news').then((resp) => {
      setNoticias(resp);
    })
  }, []);

  const nextSlide = () => {
    currentSlide >= sliderSize ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
  }

  const lastSlide = () => {
    currentSlide === 0 ? setCurrentSlide(sliderSize) : setCurrentSlide(currentSlide - 1);
  }

  const visibilityHandler = () => {
    setPageVisible(!document.hidden);
  }

  useEffect(() => {
    const inter = setInterval(() => {
      if (pageVisible) nextSlide();
    }, 7000);

    document.addEventListener("visibilitychange", visibilityHandler);

    return () => {
      clearInterval(inter);
      document.removeEventListener("visibilitychange", visibilityHandler);
    };
  }, [currentSlide, pageVisible]);

  return (
    <div className='bannerSlider' style={{ backgroundImage: `url(${noticias[currentSlide]?.banner})` }}>
      <div className='bannerSlider-container'>

        {/* titulo */}
        <Link className='bannerSlider-container-title' to={`/article/${format(noticias[currentSlide]?.title)}`}>{noticias[currentSlide]?.title}</Link>

        {/* tags */}
        <TagsCase tags={noticias[currentSlide]?.tags} banner/>

        {/* author */}
        <span className="banner-info">
          Por <Link to={`/search/${format(noticias[currentSlide]?.info.author)}`}>{noticias[currentSlide]?.info.author}</Link>, {calctime(noticias[currentSlide]?.info.time)}
        </span>

        {/* botões/imagens */}
        <div className="bannerSlider-container-buttons">

          {/* flecha cima */}
          <span className="bannerSlider-container-arrows" onClick={lastSlide}>
            <BiSolidUpArrow size={32} className="bannerSlider-container-arrow"></BiSolidUpArrow>
          </span>

          {/* primeiro botão */}
          <div
            className="back-slides"
            onClick={lastSlide}
            style={{ backgroundImage: `url(${noticias[currentSlide === 0 ? sliderSize : currentSlide - 1]?.banner})` }}>
              <span className="in-arrows-first">
                <BiSolidLeftArrow size={40} className="in-arrow"/>
              </span>
          </div>

          {/* botão do meio */}
          <div
            className='selected-slide'
            onClick={() => navigate(format(`/article/${format(noticias[currentSlide]?.title)}`))}  
            style={{ backgroundImage: `url(${noticias[currentSlide]?.banner})` }}>
          </div>

          {/* último botão */}
          <div
            className="back-slides"
            onClick={nextSlide}
            style={{ backgroundImage: `url(${noticias[currentSlide === sliderSize ? 0 : currentSlide + 1]?.banner})` }}>
              <span className="in-arrows-last">
                <BiSolidRightArrow size={40} className="in-arrow"/>
              </span>
          </div>

          {/* flecha baixo */}
          <span className="bannerSlider-container-arrows" onClick={nextSlide}>
            <BiSolidDownArrow size={32} className="bannerSlider-container-arrow"></BiSolidDownArrow>
          </span>

        </div>

      </div>
    </div>
  )
}

export default BannerSlider;