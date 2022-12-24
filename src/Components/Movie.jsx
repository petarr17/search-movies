import React from "react";
import "../movie.css";

export default function Movie(props) {
  const img = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${props.obj.poster_path}`;
  return (
    <div className="movie-container">
      <img src={img} />
      <div className="info">
        <h2>{props.obj.original_title}</h2>
        <p data="date">Release date: {props.obj.release_date}</p>
        <p data="rating">Average rating: {props.obj.vote_average}</p>
        <p data="overview">{props.obj.overview}</p>
      </div>
    </div>
  );
}
