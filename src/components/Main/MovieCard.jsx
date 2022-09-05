import React from 'react'
import { Button, Stack, Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import '../Main/css/MovieGrid.css'


const imageURL = 'https://image.tmdb.org/t/p/w500/'

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <Box className='movie-card'>
            <img src={imageURL + movie.poster_path} alt={movie.title} />
            <Typography>{movie.release_date}</Typography>
            <Stack direction="row" spacing={3}>

                <StarIcon />{movie.vote_average}

                <Typography>{movie.genres}</Typography>

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