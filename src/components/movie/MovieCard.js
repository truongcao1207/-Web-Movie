import React from "react";
import { useNavigate } from "react-router";

const MovieCard = ({ item }) => {
  const {
    title,
    vote_average,
    release_date,
    poster_path,
    id,
    name,
    first_air_date,
  } = item;
  const navigate = useNavigate();

  return (
    <div className=" movie-card rounded-2xl p-3 bg-slate-800 h-full flex flex-col select-none sm:w-full sm:p-2">
      <div className="flex flex-col ">
        <img
          onClick={() => navigate(`/${name ? "tv" : "movies"}/${id}`)}
          className="scale-95 hover:scale-105 duration-200 w-full h-[350px] object-cover rounded-lg mb-5 cursor-pointer sm:h-full sm:w-full "
          src={`https://image.tmdb.org/t/p/w500/${poster_path} `}
          alt=""
        />
        <h3 className="text-white text-xl font-bold mb-4 flex-row sm:text-base">
          {title ? title : name}
        </h3>
        <div className="flex items-center justify-between text-sm opacity-50 sm:text-xs ">
          <span>{release_date ? release_date : first_air_date}</span>
          <span>{vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
