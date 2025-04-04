import { Box, Grid, IconButton, Typography } from '@mui/joy'
import React from 'react'
import productPlaceholder from '../../../assets/placeHolders/138390.jpg';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const BigScreenCard = () => {
    return (
        <Box sx={{ width: '45%', maxHeight: '101vh', minHeight: '100vh' }} >
            <Box sx={{ padding: 1, backgroundColor: '#e4e4e4', boxShadow: '10px 10px 20px #c4c4c4, -10px -10px 20px #ffffff', borderRadius: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 1 }}>
                <Box sx={{ padding: 1.5, border: 'none', backgroundColor: '#e4e4e4', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px #c4c4c4, inset -5px -5px 5px #ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', gap: 2, width: '50%', height: '99%' }}>

                        <Box sx={{ height: '90%', width: '90%', padding: 1.5, border: 'none', backgroundColor: '#e4e4e4', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px #c4c4c4, inset -5px -5px 5px #ffffff', display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 5, flexDirection: 'column' }}>

                            <Box sx={{ display: 'flex', justifySelf: 'end', alignItems: 'end', gap: 1, flexDirection: 'column', mr: 1 }}>
                                <Typography level='h4'>
                                    نام و مشخصات کالا
                                </Typography>
                                <Typography level='body-xs'>
                                    اطلاعات اضافی
                                </Typography>
                            </Box>
                            <Box sx={{ width:'90%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography startDecorator={<StarIcon />} level='body-md'>
                                    ۴.۲
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
                                    <Typography level='body-md'>
                                        تومان
                                    </Typography>
                                    <Typography level='body-md'>
                                        ۱٫۲۳۶٫۰۰۰
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <IconButton sx={{ width: '95%', cursor: 'pointer', padding: 2, border: 'none', backgroundColor: '#e4e4e4', borderRadius: '0.8rem', boxShadow: '5px 5px 5px #c4c4c4, -5px -5px 5px #ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                            <Typography noWrap level='body-sm'>افزودن به سبد خرید</Typography>
                            <ShoppingCartOutlinedIcon />
                        </IconButton>
                        <IconButton sx={{ width: '95%', cursor: 'pointer', padding: 2, border: 'none', backgroundColor: '#e4e4e4', borderRadius: '0.8rem', boxShadow: '5px 5px 5px #c4c4c4, -5px -5px 5px #ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                            <Typography noWrap level='body-sm'>افزودن به علاقه مندی ها</Typography>
                            <FavoriteBorderOutlinedIcon />
                        </IconButton>
                    </Box>
                    <img style={{ borderRadius: '0.8rem' }} width='50%' src={productPlaceholder} />
                </Box>
            </Box>
        </Box>
    )
}

export default BigScreenCard