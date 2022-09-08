import '../Main/css/Main.css'
import MovieCard from '../Main/MovieCard';
import React, { useState, useEffect } from 'react'
import { Button, Stack, Typography, Box } from '@mui/material';


const Main = () => {

  const [movies, setMovies] = useState([])
  const [favorites, setFavorites] = useState('')

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results)
  }

  const addFavoriteMovie = () =>{
    const newFavouriteList =[...favorites, movies]
    setFavorites(newFavouriteList)
  }

  useEffect(() => {
    const topRatedUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=72948813e76d218aaf01f0d446e456d5'
    

    getMovies(topRatedUrl)
   
  }, []);

  return (

    <Box display="grid" gridTemplateColumns="repeat(6, 1fr)"   gap={4} pt={'15vh'}>

      {movies.map((movie) => <MovieCard key={movie.id} handleFavoritesClick={addFavoriteMovie} movie={movie} />)}


    </Box>
  )
}

export default Main