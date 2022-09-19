
import MovieCard from '../Main/MovieCard';
import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material';


const Main = () => {

  const [movies, setMovies] = useState([])
  const [favorites, setFavorites] = useState([])
  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results)
  }


  useEffect(() => {
    const popularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=72948813e76d218aaf01f0d446e456d5'


    getMovies(popularUrl)

  }, []);

  const addFavoriteMovie = (movie) => { //Função pra atualizar o estado 
    const newFavoriteList = [...favorites, movie]
    setFavorites(newFavoriteList)
  }

  return (

    <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap={2} pt={'15vh'} pb={'2vh'} pr={'2vw'} pl={'2vw'}>

      {movies.map((movie) => <MovieCard key={movie.id} movie={movie}  handleFavoriteClick={addFavoriteMovie}/>)}


    </Box>
  )
}

export default Main