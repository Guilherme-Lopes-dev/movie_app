import React from 'react'
import '../Header/css/Header.css'

import Logo from '../Header/assets/imgs/Logo.png'
import Searchbar from './Searchbar'
import Icons from './Icons'


const Header = () => {
  return (

    <div className='header'>
      <img src={Logo} alt="" />
      <Searchbar/>
      <Icons/>
    </div>
  )
}

export default Header