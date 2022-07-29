import React from "react";

const MovieCard = (props) => {
  const { movies } = props;

  return (
    <div>
      {movies.map((movie1) => {
        return (
          <div key={movie1.imdbID} className="movie">
            <div>
              <p>{movie1.Year}</p>
            </div>

            <div>
              <img
                src={
                  movie1.Poster !== "N/A"
                    ? movie1.Poster
                    : "https://via.placeholder.com/400"
                }
                alt={movie1.Title}
              />
            </div>

            <div>
              <span>{movie1.Type}</span>
              <h3>{movie1.Title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
