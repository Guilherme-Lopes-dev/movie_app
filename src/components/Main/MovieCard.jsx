import { Button, Stack, Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import '../Main/css/MovieGrid.css'
import React, { useState, useEffect} from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import dateParser from '../../utils/dateParser';
const imageURL = 'https://image.tmdb.org/t/p/w500/'

const MovieCard = ({ movie, showLink = true, props }) => {

    const [price, setPrice] = useState(0)
    // Essa variavel 'price' vai ser o valor inicial pra cada componente renderizado
    //A primeira coisa no array sempre é o 'price', a primeira que eu passo, e a segunda coisa no array é a função 'setPrice' que me permite atualizar o estado da 'price'

    useEffect(() => {
        function createPrice(){
            setPrice(Math.floor(Math.random() * 10000 + 2000) / 100 )
        } 
        createPrice()
    }, [])


    return (

        <Box className='movie-card'>
            <Stack direction="column"
                justifyContent="center"
                alignItems="center" 
                textAlign="center"
                spacing={1}>
                <img src={imageURL + movie.poster_path} alt={movie.title} />
                <Typography>{dateParser(movie.release_date)}</Typography>
                <Typography fontSize={12}>{movie.title}</Typography>
                <Stack direction='row' spacing={2} alignItems={'center'} justifyContent={'center'}>
                    <Typography>
                        <StarIcon />{movie.vote_average}
                    </Typography>
                    <Typography>
                        {movie.original_language.toUpperCase()}
                    </Typography>
                </Stack>
                <Typography >
                    R$: {price}
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button variant="contained" startIcon={<FavoriteIcon />}>
                        Favoritar
                    </Button>
                    <Button variant="contained" startIcon={<ShoppingCartOutlinedIcon />} >
                        Comprar
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default MovieCard