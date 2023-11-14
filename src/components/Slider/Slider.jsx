import React, { useState, useEffect } from 'react';
import { getData } from '../../database/DataApi';
import './Slider.css';

function Slider() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    getData().then((resp) => {
      setNoticias(resp);
      document.documentElement.style.setProperty('--radioBox_width', `${(resp.length) * 40}px`);
    });
  }, []);

  const change_time = 5000;
  let current_frame = 0;
  let change_frame = setInterval(att, change_time);

  function att() {
    current_frame = current_frame < noticias?.length - 1 ? ++current_frame : current_frame = 0;

    selectSlide(current_frame);
  };

  function selectSlide(selected) {
    
    document.documentElement.style.setProperty('--current_frame', `-${selected}00%`);

    document.getElementById(`radio${selected}`).checked = true;

    current_frame = selected;

    clearInterval(change_frame);
    change_frame = setInterval(att, change_time);
  };

  return (
    <section className="slider">
      <div className="slider__body">
        {noticias.map((img, i) => {
          return <div key={i} className="slider__body--img" style={{ backgroundImage: `url(${img.banner})` }}></div>
        })}
      </div>
      <div className="slider__radioBox">
        {noticias.map((img, i) => {
          return (
            <React.Fragment key={i}>
              <input onClick={() => selectSlide(i)} id={`radio${i}`} className="slider__radioBox--radio" type="radio" name="slide" defaultChecked={i === 0}/>
              <label onClick={() => selectSlide(i)} htmlFor={`radio${i}`} className="slider__radioBox--label"></label>
            </React.Fragment>
          )
        })}
      </div>
    </section>
  )
}

export default Slider;