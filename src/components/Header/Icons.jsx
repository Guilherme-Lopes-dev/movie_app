import React from 'react'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './css/Icons.css'
const Favorites = () => {
  return (
    <div className='icons'>
    <FavoriteOutlinedIcon className='favicon'/>
    <ShoppingCartOutlinedIcon className='shopicon'/>
    </div>

  )
}

export default Favorites