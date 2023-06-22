import React from 'react';
import { Box, Button, Stack, Typography, hexToRgb } from '@mui/material';
import HeroBannerimg from "../assets/images/banner1.jpg";

import { Opacity } from '@mui/icons-material';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs:'70px' },
        ml: {sm: '50px'}
    }} position="relative" padding="20px">
        <Typography color="error" fontWeight="600" fontSize="43px">
           The Fitness Club
        </Typography> 
        <Typography fontWeight={600} fontSize="31px" color="smokeWhite" fontStyle="italic" sx={{ lg: '44px' , xs: '40px'  }} mb='30px' mt='20px'>
            The body achieves what the mind believes!
        </Typography>
        <Typography fontSize='25px' lineHeight='25px' mb={1.5} >
            Check Out The Most Effective Excercise.
        </Typography>
        <Button variant="contained" color="error" href="#excercises">Explore Excercise</Button>
        <Typography fontWeight={300} color= "black"    sx={{
            opacity: 0.3,
            display: {lg: 'block', xs: 'none'}

        }} fontSize='200px'>
            Excercise
        </Typography>
        <img src={HeroBannerimg} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner