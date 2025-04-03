import { Box, Grid, Typography } from '@mui/joy'
import React from 'react'
import productPlaceholder from '../../../assets/sliderImg0.jpg'

const BigScreenCard = () => {
    return (
        <Box>
            <Box sx={{ padding: 1, backgroundColor: '#e4e4e4', boxShadow: '10px 10px 20px #c4c4c4, -10px -10px 20px #ffffff', borderRadius: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 1 }}>
                <Box sx={{ padding: 1.5, border: 'none', backgroundColor: '#e4e4e4', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px #c4c4c4, inset -5px -5px 5px #ffffff' }}>
                    <img height='280rem' src={productPlaceholder} />
                    <Typography>
                        sdgfjlglg
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default BigScreenCard