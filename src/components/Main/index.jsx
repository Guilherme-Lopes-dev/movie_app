import '../Main/css/Main.css'
import MovieCard from '../Main/MovieCard';
import React, { useState, useEffect } from 'react'


const Main = () => {

  const [topMovies, setTopMovies, setMovieGenre] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results)
  }
  const getGenres = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovieGenre(data.results)
  }

  useEffect(() => {
    const topRatedUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=72948813e76d218aaf01f0d446e456d5'
    const getGenresURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=72948813e76d218aaf01f0d446e456d5&language=en-US'


  
    
    getTopRatedMovies(topRatedUrl)
    getGenres(getGenresURL)
    
    
  }, []);

  return (

    <div className='container'>
      
      {topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/> )}
      
      
    </div>
  )
}

export default Main