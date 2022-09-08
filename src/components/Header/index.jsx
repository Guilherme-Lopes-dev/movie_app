import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Box, Stack, Typography, Divider, Button } from '@mui/material'
import '../Header/css/Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import logo from './assets/imgs/Logo.png'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';



const Favorito = ({ showFavorite, setFavoriteState }) => {
  const toggleState = () => setFavoriteState();

  return (
    <>
      <div className="button-favorite">
        <Button onClick={toggleState}><FavoriteIcon /></Button>
        <div className={`favorites-bar ${!showFavorite ? "hidden" : ""}`}>
          Favoritos
        </div>
      </div>
    </>
  );
};

const Cart = ({ showCart, setCartState }) => {
  const toggleState = () => setCartState();

  return (
    <>
      <div className="button-cart">
        <Button onClick={toggleState}><ShoppingCartIcon /></Button>

        <div className={`cart-bar ${!showCart ? "hidden" : ""}`}>Cart</div>
      </div>
    </>
  );
};

export default function Header() {
  const [showFavorite, setFavoriteState] = React.useState(false);
  const [showCart, setCartState] = React.useState(false);

  const handleToggleFavorite = () => {
    setFavoriteState(!showFavorite);

    if (showCart) setCartState(false);
  };

  const handleToggleCart = () => {
    setCartState(!showCart);

    if (showFavorite) setFavoriteState(false);
  };

  return (
    <Box className='main-header'>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <img className='logo' src={logo} alt="Logo" />
        <div className='search'>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >

            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Pesquise algo..."

            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>


          </Paper>
        </div>
        <Stack className="header" direction="row">
          <Favorito showFavorite={showFavorite} setFavoriteState={handleToggleFavorite}/>
          <Cart showCart={showCart} setCartState={handleToggleCart} />
        </Stack>
      </Stack>
    </Box>

  );
}

