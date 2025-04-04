import { Box } from '@mui/joy'
import React from 'react'
import Marquee from "react-fast-marquee";
import mrq1 from '../../assets/brandsMarquee/7930267.png'
import mrq2 from '../../assets/brandsMarquee/ADATA-logo.svg'
import mrq3 from '../../assets/brandsMarquee/anker-vector-logo.png'
import mrq4 from '../../assets/brandsMarquee/Bange_logo_694a6d14-b9d5-4fe4-a715-1afb6da9b2c3.jpg.webp'
import mrq5 from '../../assets/brandsMarquee/belkin_logo_notm.svg'
import mrq6 from '../../assets/brandsMarquee/e06153e6e43cf7536f610dabd7211c85.png'
import mrq7 from '../../assets/brandsMarquee/file1621396614368.png'
import mrq8 from '../../assets/brandsMarquee/foot-logo.png'
import mrq9 from '../../assets/brandsMarquee/hopestar-shop-logo.png.avif'
import mrq10 from '../../assets/brandsMarquee/logo .png'
import mrq11 from '../../assets/brandsMarquee/Powerology.png'



const MarqueeComponent = () => {
    return (
        <Box>

            <Box sx={{ borderTop: '1px solid black', paddingTop: 5, borderBottom: '1px solid black', paddingBottom: 5 }}>
                <Marquee gradient>
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq1} alt='img1' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq2} alt='img2' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq3} alt='img3' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq4} alt='img4' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq5} alt='img5' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq6} alt='img6' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq7} alt='img7' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq8} alt='img8' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq9} alt='img9' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq10} alt='img10' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq11} alt='img11' />
                </Marquee>
            </Box>
            <Box sx={{ paddingTop: 5, borderBottom: '1px solid black', paddingBottom: 5 }}>
                <Marquee direction='right' gradient>
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq7} alt='img7' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq1} alt='img1' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq4} alt='img4' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq5} alt='img5' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq2} alt='img2' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq3} alt='img3' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq10} alt='img10' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq8} alt='img8' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq9} alt='img9' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq11} alt='img11' />
                    <img style={{ marginRight: '6rem' }} height='50rem' src={mrq6} alt='img6' />
                </Marquee>
            </Box>
        </Box>
    )
}

export default MarqueeComponent