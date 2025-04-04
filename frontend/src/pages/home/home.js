import { Box, Grid } from '@mui/joy'
import React from 'react'
import NavBar from '../../components/navBar/navBar'
import BigScreenCard from '../../components/productComponents/bigScreenProductCard/bigScreenCard'
import ImageSlider from '../../components/homeComponents/imageSlider'
import MarqueeComponent from '../../components/homeComponents/marqueeComponent'

const Home = () => {
    return (
        <Box >
            <Box sx={{position:'fixed', width:'100vw', top:0, right:0}}>
                <NavBar />
            </Box>
            <Grid sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', mt:15 }} container spacing={3}>
                <Grid >
                    <BigScreenCard/>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Home
