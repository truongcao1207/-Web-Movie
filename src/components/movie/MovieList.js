import { React, useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";

import { fetcher } from "../../config";
import AOS from "aos";
import "aos/dist/aos.css";

const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  AOS.init();

  return (
    <div className="movie-list">
      <Swiper
        grabCursor={true}
        // spaceBetween={40}
        // slidesPerView={4}
        // className="mySwiper"

        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1023: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
