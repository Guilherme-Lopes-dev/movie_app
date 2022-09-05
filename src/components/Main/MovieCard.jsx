
import { Button, Stack, Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import '../Main/css/MovieGrid.css'
import React, { useState, useEffect } from 'react'


const imageURL = 'https://image.tmdb.org/t/p/w500/'

const MovieCard = ({ movie, genre, showLink = true }) => {
    const [genres, setMovieGenre] = useState([])

    const movieGenres = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovieGenre(data.results)
    }

    useEffect(() => {

        const getGenresURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=72948813e76d218aaf01f0d446e456d5&language=en-US'


        movieGenres(getGenresURL)
    }, []);
   
    const getMovieGenres = (MovieGenres) => {
        return genres.filter(genre => movieGenres.includes(genre.id))
        console.log(genres)
    }


    return (
        <Box className='movie-card'>
            <img src={imageURL + movie.poster_path} alt={movie.title} />
            <Typography>{movie.release_date}</Typography>
            <Stack direction="row" spacing={3}>

                <StarIcon />{movie.vote_average}

                <Typography>{}</Typography>

            </Stack>

            <Typography >
                Valor
            </Typography>

            <Stack direction='row' spacing={2}>
                <Button variant="contained">
                    Favoritar
                </Button>
                <Button variant="contained" >
                    Comprar
                </Button>
            </Stack>
        </Box>
    )
}

export default MovieCard