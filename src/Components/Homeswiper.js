import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { FiPlayCircle } from "react-icons/fi";

import "./css/homeswiper.css";
// import "./js/swiper.js";

import swiperData from "../data/swiperData.json"; // Assuming the JSON file is located in the '../data' directory

function Homeswiper() {
  const [swiperSlides, setSwiperSlides] = useState([]);

  useEffect(() => {
    // Load the swiper data from the JSON file
    setSwiperSlides(swiperData);
  }, []);

  return (
    <Swiper
      effect="slide"
      loop={true}
      speed={1000}
      slidesPerView={1}
      grabCursor={true}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
      }}
      watchOverflow={true}
      watchSlidesProgress={true}
      watchSlidesVisibility={true}
      roundLengths={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {swiperSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="swiper_container">
            <img
              src={slide.image}
              alt={slide.title}
              className="swiper_poster"
            />
            <div className="swiper_overlay" />
            <div className="swiper_content">
              <h1 className="swiper_title">{slide.title}</h1>
              <div className="swiper_rating">
                <span className="swiper_rating_icon">
                  <img
                    src={slide.ratingIcon}
                    alt="IMDB"
                    className="rating_icon"
                  />
                </span>
                <span className="swiper_rating_value">{slide.rating}</span>
              </div>
              <p className="swiper_description">{slide.description}</p>
              <a href="#" className="swiper_button">
                <FiPlayCircle className="btn_play_icon" />
                Watch Trailer
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Homeswiper;
