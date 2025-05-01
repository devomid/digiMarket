import React from 'react'
import parImg from '../../assets/heroBannerParallax/6e115877c5d0836340e9626037be0c32.jpg'
import { Box, Typography } from '@mui/joy';
import SimpleParallax from "simple-parallax-js";


const HeroPicParallax = () => {
    return (

        <Box sx={{ mt: 15, width: '100vw', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '5px solid red' }}>
            {/* <SimpleParallax overflow={false} scale={1.7} orientation='right'> */}
                <img src={parImg} alt={"image"} style={{ width: '100%', maxHeight: '100%', maxWidth:'none', objectFit: 'cover' }} />
            {/* </SimpleParallax> */}
        </Box>
    )
}

export default HeroPicParallax