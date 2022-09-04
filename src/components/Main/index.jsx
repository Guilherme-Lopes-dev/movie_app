import '../Main/css/Main.css'
import MovieCard from '../Main/MovieCard';
import React, { useState, useEffect } from 'react'


const Main = () => {

  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results)
    console.log(data)
  }
  useEffect(() => {
    const topRatedUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=72948813e76d218aaf01f0d446e456d5'
    getTopRatedMovies(topRatedUrl)
    console.log(topRatedUrl)
  }, []);
  return (

    <div className='container'>
      
      {topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/> )}
      
    </div>
  )
}

export default Main