import React, { useEffect, useState } from 'react'
import MovieService from '../services/movies.service';

function AppMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        const fetchMovies = async () => {
            const response = await MovieService.getMovies();
            if(Array.isArray(response.data)) {
                setMovies(response.data);
            }
        };
        fetchMovies();
    }, [])


  return (
    <div className="container">
      <h2>Movie list:</h2>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4 mb-3">
            <div className="card">
              {/* <img src={movie.imageUrl} className="card-img-top" /> */}
              <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <p className="card-text">Director: {movie.director}</p>
                <p className="card-text">Genre: {movie.genre}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppMovies;
