import React from 'react'
import { Button, Stack, Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import '../Main/css/MovieGrid.css'


const imageURL = 'https://image.tmdb.org/t/p/w500/'

const MovieCard = ({movie, showLink = true}) => {
    return (
        <div className='movie-card'>
            <img src={imageURL + movie.poster_path} alt={movie.title} />
            <Typography>Data de lançamento</Typography>
            <Stack direction="row">
                <Typography >
                    <StarIcon/>{movie.vote_average}
                </Typography>
            </Stack>

            <Typography >
                Valor
            </Typography> 
            <Button>
                Adicionar
            </Button>
        </div>
    )
}

export default MovieCard