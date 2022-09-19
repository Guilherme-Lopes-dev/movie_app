import React from 'react'
import './Cart.css'
import CloseIcon from '@mui/icons-material/Close';
import { Box, Stack, Typography, Divider } from '@mui/material'

const Cart = () => {

  return (
    <Box className='cart-bar' textAlign="center">
    <CloseIcon className='close-icon'/>
    <Stack pt={12} pl={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={8}>
      <Typography >Meu Carrinho</Typography>
    </Stack >
    <Stack  >
    <Typography pt={5}>Seu carrinho está vazio</Typography>
    </Stack>
  </Box>
  )
}

export default Cart