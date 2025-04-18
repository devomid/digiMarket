import { Box, Grid, Typography } from '@mui/joy'
import React from 'react'
import NavBar from '../navBar/navBar';
import image from '../../assets/heroBannerParallax/4cee125f2dd11ce6309121c3d3edf2eb.jpg'
import CatModal from '../../components/categoryComponents/catModal';
import LoginModal from '../../components/loginComponent/loginModal';
import HeroPicParallax from '../../components/homeComponents/heroPicParallax';


const Home = () => {
    return (
        <Box >
            <Box sx={{ position: 'fixed', width: '100vw', top: 0, right: 0 }}>
                <NavBar />
            </Box>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <HeroPicParallax/>
            </Box>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <HeroPicParallax/>
            </Box>
            <CatModal />
            <LoginModal/>
        </Box>
    )
}

export default Home
