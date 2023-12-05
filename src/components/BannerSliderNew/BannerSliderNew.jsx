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
    // setLoadingWidth(0);
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
    <section className={styles.bannerSlider} style={{ backgroundImage: `url(${noticias[currentSlide]?.banner})` }}>
      <div className={styles.bannerSlider_filter}></div>
      <div className={styles.bannerSlider_container}>
        <TagsCase tags={noticias[currentSlide]?.tags} />
        <span className={styles.bannerSlider_container_title}>{noticias[currentSlide]?.title}</span>
        <span className={styles.bannerSlider_container_subtitle}>{noticias[currentSlide]?.subtitle}</span>
        <span className={styles.bannerSlider_container_data}>Por&nbsp;
          <Link className={styles.bannerSlider_container_autor} to={`/search/${format(noticias[currentSlide]?.info.autor)}`}>
            {noticias[currentSlide]?.info.autor}</Link>, {calctime(noticias[currentSlide]?.info.time)}
        </span>
        <div className={styles.bannerSlider_container_radioCase}>
          <input type='radio' id='slideRadio0' name='slideRadio' value='0' checked={currentSlide == 0} onClick={() => setCurrentSlide(0)}></input>
          <label for='slideRadio0'>
            {/* <div style={{ width: `${loadingWidth}%` }} className={styles.loadingBar}></div> */}
            </label>

          <input type='radio' id='slideRadio1' name='slideRadio' value='1' checked={currentSlide == 1} onClick={() => setCurrentSlide(1)}></input>
          <label for='slideRadio1'>
            {/* <div style={{ width: `${loadingWidth}%` }} className={styles.loadingBar}></div> */}
            </label>

          <input type='radio' id='slideRadio2' name='slideRadio' value='2' checked={currentSlide == 2} onClick={() => setCurrentSlide(2)}></input>
          <label for='slideRadio2'>
            {/* <div style={{ width: `${loadingWidth}%` }} className={styles.loadingBar}></div> */}
            </label>

          <input type='radio' id='slideRadio3' name='slideRadio' value='3' checked={currentSlide == 3} onClick={() => setCurrentSlide(3)}></input>
          <label for='slideRadio3'>
            {/* <div style={{ width: `${loadingWidth}%` }} className={styles.loadingBar}></div> */}
            </label>

          <input type='radio' id='slideRadio4' name='slideRadio' value='4' checked={currentSlide == 4} onClick={() => setCurrentSlide(4)}></input>
          <label for='slideRadio4'>
            {/* <div style={{ width: `${loadingWidth}%` }} className={styles.loadingBar}></div> */}
            </label>

          <input type='radio' id='slideRadio5' name='slideRadio' value='5' checked={currentSlide == 5} onClick={() => setCurrentSlide(5)}></input>
          <label for='slideRadio5'>
            {/* <div style={{ width: `${loadingWidth}%` }} className={styles.loadingBar}></div> */}
            </label>
        </div>

      </div>
    </section>
  )
}

export default BannerSliderNew;