import '../Main/css/Main.css'
import MovieCard from '../Main/MovieCard';
import React, { useState, useEffect } from 'react'


const Main = () => {

  const [movies, setMovies] = useState([])

 // const [genres, setMovieGenre] = useState([])

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results)
  }
  /*const movieGenres = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovieGenre(data.results)
  }*/

  useEffect(() => {
    const topRatedUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=72948813e76d218aaf01f0d446e456d5'
    //const getGenresURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=72948813e76d218aaf01f0d446e456d5&language=en-US'

    getMovies(topRatedUrl)
   // movieGenres(getGenresURL)
  }, []);

 /* const getMovieGenres = (MovieGenres) => {
    return genres.filter(genre => movieGenres.includes(genre.id))
    console.log(getMovieGenres)
  }*/


  return (

    <div className='container'>

      {movies.map((movie) => <MovieCard key={movie.id}  movie={movie} />)}


    </div>
  )
}

export default Main