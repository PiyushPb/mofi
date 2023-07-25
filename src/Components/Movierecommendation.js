import React, { useState } from "react";
import "./css/movierecommendation.css";
import movieData from "../data/movies.json"; // Import the movie data from the JSON file

function Movierecommendation() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Filter the movies based on the search term
    const filteredMovies = movieData.movies.filter((movie) =>
      movie.toLowerCase().includes(value.toLowerCase())
    );

    // Update the suggestions with the filtered movies
    setSuggestions(filteredMovies);

    // Clear suggestions when the input field is empty
    if (value === "") {
      setSuggestions([]);
    }
  };

  const handleSelectMovie = (movieName) => {
    setSearchTerm(movieName);
    setSuggestions([]); // Clear suggestions after selecting a movie
  };

  return (
    <div className="movie_recommendation_container">
      <h1>
        "Unlock the Magic of Cinema - Let Our AI Recommend Your Perfect Movie!"{" "}
        🎬✨
      </h1>
      <div className="movie_recommendation">
        <div className="input_btn_container">
          <input
            type="text"
            placeholder="Enter your favourite movie"
            value={searchTerm}
            onChange={handleChange}
          />
          <button>Recommend</button>
        </div>
        {suggestions.length > 0 && (
          <ul className="movie_suggestions">
            {suggestions.map((movie, index) => (
              <li key={index} onClick={() => handleSelectMovie(movie)}>
                {movie}
              </li>
            ))}
          </ul>
        )}
        <div className="recommended_movies_container">
          <div className="featured_movies_list_item"></div>
        </div>
      </div>
    </div>
  );
}

export default Movierecommendation;
