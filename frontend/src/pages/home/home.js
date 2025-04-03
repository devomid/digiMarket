import { Box, Grid } from '@mui/joy'
import React from 'react'
import NavBar from '../../components/navBar/navBar'
import BigScreenCard from '../../components/productComponents/bigScreenProductCard/bigScreenCard'
import ImageSlider from '../../components/homeComponents/imageSlider'

const Home = () => {
    return (
        <Box >
            <Box>
                <NavBar />
            </Box>
            <Grid sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }} container spacing={3}>
                <Grid >
                    <ImageSlider/>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Home
