import swiper1 from "../assets/Poster.jpg";
import "./css/homeswiper.css";

import { FiPlayCircle } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

function Homeswiper() {
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
      <SwiperSlide>
        <div className="swiper_container">
          <img src={swiper1} alt="Jhon wick 3" className="swiper_poster" />
          <div className="swiper_overlay" />
          <div className="swiper_content">
            <h1 className="swiper_title">John Wick 3 : Parabellum</h1>
            <div className="swiper_rating">
              <span className="swiper_rating_icon">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                  alt="IMDB"
                  className="rating_icon"
                />
              </span>
              <span className="swiper_rating_value">86.0 / 100</span>
            </div>
            <p className="swiper_description">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
            <a href="#" className="swiper_button">
              <FiPlayCircle className="btn_play_icon" />
              Watch Trailer
            </a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper_container">
          <img src={swiper1} alt="Jhon wick 3" className="swiper_poster" />
          <div className="swiper_overlay" />
          <div className="swiper_content">
            <h1 className="swiper_title">John Wick 2 : Parabellum</h1>
            <div className="swiper_rating">
              <span className="swiper_rating_icon">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                  alt="IMDB"
                  className="rating_icon"
                />
              </span>
              <span className="swiper_rating_value">86.0 / 100</span>
            </div>
            <p className="swiper_description">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
            <a href="#" className="swiper_button">
              <FiPlayCircle className="btn_play_icon" />
              Watch Trailer
            </a>
          </div>
        </div>
      </SwiperSlide>
      <div class="swiper-hero-progress"></div>
    </Swiper>
  );
}

export default Homeswiper;
