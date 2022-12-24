import React from "react";
import Movie from "./Movie";

export default function DisplayMovies(props) {
  const [movies, changeName] = React.useState("");

  React.useEffect(
    function () {
      if (props.word != "") {
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=e26fad2d1d175e7f72a19adabbb4e414&language=en-US&query=${props.word}&page=1&include_adult=false`
        )
          .then((res) => res.json())
          .then((data) => {
            const elements = data.results.map((movie) => {
              return <Movie key={movie.id} obj={movie} />;
            });

            changeName(elements);
          });
      } else {
        changeName("");
      }
    },
    [props.word]
  );

  return (
    <div className="moviesDiv">
      <div className="wrapper">{movies}</div>
    </div>
  );
}
