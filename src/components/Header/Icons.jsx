import React from 'react'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './css/Icons.css'
import { Stack } from '@mui/material'
const Favorites = () => {
  const openFavorites = () => {
    document.querySelector('.favorites-bar').style.visibility = 'visible';
    
  }

  const openCart = () => {
    document.querySelector('.cart-bar').style.visibility = 'visible';
    
  }
  return (
    <Stack className='icons'  direction="row" spacing={3}>
      <FavoriteOutlinedIcon className='favicon' onClick={openFavorites}/>
      <ShoppingCartOutlinedIcon className='shopicon'  onClick={openCart}/>
    </Stack>

  )
}

export default Favorites