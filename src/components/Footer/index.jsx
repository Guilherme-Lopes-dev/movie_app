import React from 'react'
import '../Footer/Footer.css'
import { Link, Stack, Typography, Box } from '@mui/material';

export const Footer = () => {
  return (
    <Box className='footer'>
      <Stack direction='row' spacing={3} justifyContent='center' pt={5}>
        <Typography>Feito com dedicação por: Guilherme Lopes  </Typography>
      </Stack>
      <Stack direction='row' spacing={3} justifyContent='center' pt={5}>
        <Link href="https://www.linkedin.com/in/guilherme-louren%C3%A7o-lopes-81650b215/" target="_blank">Linkedin </Link>
        <Link href="https://github.com/Guilherme-Lopes-dev" target="_blank">GitHub </Link>
      </Stack>


    </Box>
  )
}

export default Footer
