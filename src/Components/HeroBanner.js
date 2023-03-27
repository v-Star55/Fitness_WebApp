import { Button, Typography } from '@mui/material'
import { Stack,Box, color } from '@mui/system'
import React from 'react'
import "../App.css"

import hero from "../Assests/hero.jpg"

const HeroBanner = () => {
  return (
    <div className="hero">
    <Box sx={{mt :{lg:"176px",xs:"70px"},
         ml :{sm:"50px"}}}>
        <div className='image'>  </div>
        <Typography color="#ff2626" fontWeight="600" fontSize="24px">Fitness</Typography>
        <Typography style={{color:"white"}} fontWeight="700" sx={{fontSize :{lg:"44px",xs:"40px"}}}>Sweat , Smell , Smile <br /> and Repeat </Typography>

        <Typography style={{color:"white"}} fontWeight="500" fontSize="15px" lineHeight="35px">Check out the fitness exercise</Typography>
        <Button variant='text' color='secondary'>EXPLORE EXERCISE</Button> 
    </Box>

    </div>
  )
}

export default HeroBanner
