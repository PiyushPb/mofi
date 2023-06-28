import React from "react";
import "./css/featuredmovies.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Featuredmovies() {
  return (
    <div className="featured_movies">
      <div className="featured_movies_container">
        <div className="featured_movies_title">
          <h2>Featured Movies</h2>
          <span>View All {">"}</span>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 210,
            },
          }}
          effect="slide"
          loop={true}
          speed={1000}
          grabCursor={true}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          watchOverflow={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="featured_movies_list_swiper"
        >
          <SwiperSlide>
            <div className="featured_movies_list">
              <div className="featured_movies_list_item">
                <img
                  src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
                  alt="movie poster"
                />
                <div className="featured_movies_list_item_info">
                  <span>USA, 2016 - Current</span>
                  <h3>Money Heist</h3>
                  <span className="swiper_rating_icon">
                    <div className="imdb">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                        alt="IMDB"
                        className="rating_icon"
                        width={20}
                      />
                      <span className="swiper_rating_value">88.0 / 100</span>
                    </div>
                    <div className="rottentomato">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Rotten_Tomatoes.svg"
                        alt="IMDB"
                        className="rating_icon rotten"
                      />
                      <span className="swiper_rating_value">97%</span>
                    </div>
                  </span>
                  <span>Crime, Drama, Thriller</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="featured_movies_list">
              <div className="featured_movies_list_item">
                <img
                  src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
                  alt="movie poster"
                />
                <div className="featured_movies_list_item_info">
                  <span>USA, 2016 - Current</span>
                  <h3>Money Heist</h3>
                  <span className="swiper_rating_icon">
                    <div className="imdb">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                        alt="IMDB"
                        className="rating_icon"
                        width={20}
                      />
                      <span className="swiper_rating_value">88.0 / 100</span>
                    </div>
                    <div className="rottentomato">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Rotten_Tomatoes.svg"
                        alt="IMDB"
                        className="rating_icon rotten"
                      />
                      <span className="swiper_rating_value">97%</span>
                    </div>
                  </span>
                  <span>Crime, Drama, Thriller</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="featured_movies_list">
              <div className="featured_movies_list_item">
                <img
                  src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
                  alt="movie poster"
                />
                <div className="featured_movies_list_item_info">
                  <span>USA, 2016 - Current</span>
                  <h3>Money Heist</h3>
                  <span className="swiper_rating_icon">
                    <div className="imdb">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                        alt="IMDB"
                        className="rating_icon"
                        width={20}
                      />
                      <span className="swiper_rating_value">88.0 / 100</span>
                    </div>
                    <div className="rottentomato">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Rotten_Tomatoes.svg"
                        alt="IMDB"
                        className="rating_icon rotten"
                      />
                      <span className="swiper_rating_value">97%</span>
                    </div>
                  </span>
                  <span>Crime, Drama, Thriller</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="featured_movies_list">
              <div className="featured_movies_list_item">
                <img
                  src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
                  alt="movie poster"
                />
                <div className="featured_movies_list_item_info">
                  <span>USA, 2016 - Current</span>
                  <h3>Money Heist</h3>
                  <span className="swiper_rating_icon">
                    <div className="imdb">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                        alt="IMDB"
                        className="rating_icon"
                        width={20}
                      />
                      <span className="swiper_rating_value">88.0 / 100</span>
                    </div>
                    <div className="rottentomato">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Rotten_Tomatoes.svg"
                        alt="IMDB"
                        className="rating_icon rotten"
                      />
                      <span className="swiper_rating_value">97%</span>
                    </div>
                  </span>
                  <span>Crime, Drama, Thriller</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="featured_movies_list">
              <div className="featured_movies_list_item">
                <img
                  src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
                  alt="movie poster"
                />
                <div className="featured_movies_list_item_info">
                  <span>USA, 2016 - Current</span>
                  <h3>Money Heist</h3>
                  <span className="swiper_rating_icon">
                    <div className="imdb">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                        alt="IMDB"
                        className="rating_icon"
                        width={20}
                      />
                      <span className="swiper_rating_value">88.0 / 100</span>
                    </div>
                    <div className="rottentomato">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Rotten_Tomatoes.svg"
                        alt="IMDB"
                        className="rating_icon rotten"
                      />
                      <span className="swiper_rating_value">97%</span>
                    </div>
                  </span>
                  <span>Crime, Drama, Thriller</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="featured_movies_list">
              <div className="featured_movies_list_item">
                <img
                  src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
                  alt="movie poster"
                />
                <div className="featured_movies_list_item_info">
                  <span>USA, 2016 - Current</span>
                  <h3>Money Heist</h3>
                  <span className="swiper_rating_icon">
                    <div className="imdb">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                        alt="IMDB"
                        className="rating_icon"
                        width={20}
                      />
                      <span className="swiper_rating_value">88.0 / 100</span>
                    </div>
                    <div className="rottentomato">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Rotten_Tomatoes.svg"
                        alt="IMDB"
                        className="rating_icon rotten"
                      />
                      <span className="swiper_rating_value">97%</span>
                    </div>
                  </span>
                  <span>Crime, Drama, Thriller</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
