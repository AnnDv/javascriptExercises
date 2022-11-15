import React from 'react';
import MovieImage from './movieComponents/MovieImage';
import MovieTitle from './movieComponents/MovieTitle';
import "./MovieList.css";
import ShowInfoButton from '../features/ShowInfoButton';
import PropTypes from 'prop-types';

function MovieList({movies}){
  return (
    <div className='grid'>
      {movies?.map(movie => (
        <div key={movie.id} className="card_description">
          <MovieImage image={movie.poster_path}/>
          <MovieTitle title={movie.title}/>
          <ShowInfoButton overview={movie.overview}/>
        </div> 
        ))}
    </div>
  );
}

MovieList.propTypes = {
    movies: PropTypes.array
}

export default MovieList;