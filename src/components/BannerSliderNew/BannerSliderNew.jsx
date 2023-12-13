import styles from './BannerSliderNews.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../../database/DataApi';
import { calctime } from '../../functions/calctime';
import { format } from '../../functions/format';
import TagsCase from '../TagsCase/TagsCase';

function BannerSliderNew() {
  const [noticias, setNoticias] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderSize = 5;
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const radioSlides = [];
  // const [loadingWidth, setLoadingWidth] = useState(0);

  document.querySelectorAll('input[type=radio][name=slideRadio]').forEach(radio => {
    radio.addEventListener('change', function () {
      if (this.checked) {
        setCurrentSlide(this.value);
      }
    });
  });

  const nextSlide = () => {
    currentSlide >= sliderSize ? setCurrentSlide(Number(0)) : setCurrentSlide(Number(currentSlide) + 1);
    setTouchStartX(0); setTouchEndX(0);
    // setLoadingWidth(0);
  }

  const lastSlide = () => {
    currentSlide === 0 ? setCurrentSlide(Number(sliderSize)) : setCurrentSlide(Number(currentSlide) - 1);
    setTouchStartX(0); setTouchEndX(0);
  }

  useEffect(() => {
    getData('').then((resp) => {
      setNoticias(resp);
    })
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSlide]);
  
  const handleTouch = () => {
    const difference = touchStartX - touchEndX;
    if (touchStartX !== 0 && touchEndX !== 0 && Math.abs(difference) > 20) {
      if (difference > 0) nextSlide();
      else lastSlide();
    }
  };

  for (let i=0; i<6; i++) {
    radioSlides.push(
      <>
        <input type='radio' id={`slideRadio${i}`} name='slideRadio' value={i} checked={currentSlide == i} onClick={() => setCurrentSlide(i)}></input>
        <label for={`slideRadio${i}`}>
            {/* <div style={{ width: `${loadingWidth}%` }} className={styles.loadingBar}></div> */}
        </label>
      </>
    )
  }

  // useEffect(() => {
  //   setLoadingWidth(0); // Zerar a largura da barra de carregamento ao mudar de slide
  //   const interval = setInterval(() => {
  //     setLoadingWidth((prevWidth) => {
  //       const newWidth = prevWidth + (100 / 700); // Aumentar 100% em 7 segundos
  //       return newWidth >= 100 ? 100 : newWidth; // Limitar a 100% para evitar overflow
  //     });
  //   }, 10);
  
  //   return () => clearInterval(interval);
  // }, [currentSlide]);

  return (
    <section className={styles.bannerSlider} onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)} onTouchMove={(e) => setTouchEndX(e.touches[0].clientX)} onTouchEnd={handleTouch}>
      <div className={styles.bannerSlider_background} style={{ backgroundImage: `url(${noticias[currentSlide]?.banner})`}}></div>
      <div className={styles.bannerSlider_filter}></div>
      <div className={styles.bannerSlider_container}>
        <TagsCase tags={noticias[currentSlide]?.tags} />
        <Link className={styles.bannerSlider_container_title} to={`/article/${format(noticias[currentSlide]?.title)}`}>{noticias[currentSlide]?.title}</Link>
        <span className={styles.bannerSlider_container_subtitle}>{noticias[currentSlide]?.subtitle}</span>
        <span className={styles.bannerSlider_container_data}>Por&nbsp;
          <Link className={styles.bannerSlider_container_autor} to={`/search/${format(noticias[currentSlide]?.info.autor)}`}>
            {noticias[currentSlide]?.info.autor}</Link>, {calctime(noticias[currentSlide]?.info.time)}
        </span>
        <div className={styles.bannerSlider_container_radioCase}>
          {radioSlides}
        </div>
      </div>
    </section>
  )
}

export default BannerSliderNew;