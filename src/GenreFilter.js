// GenreFilter.js
import React from 'react';

function GenreFilter({ genres, onGenreSelect }) {
  return (
    <div className="genre-filter">
        <h2>Filter by Genre</h2>
      {genres.map((genre, index) => (
        <button key={index} onClick={() => onGenreSelect(genre)}>{genre}</button>
      ))}
    </div>
  );
}

export default GenreFilter;
