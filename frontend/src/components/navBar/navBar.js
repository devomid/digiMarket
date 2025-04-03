import { Box, Dropdown, Grid, IconButton, Input, Menu, MenuButton, MenuItem, Typography } from '@mui/joy'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'; import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import CategoryIcon from '@mui/icons-material/Category';
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import logi from '../../assets/logo192.png'


const NavBar = () => {
    const [userPresence, setUserPresence] = useState(false);

    return (
        <Grid sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.3rem 1rem', backgroundColor: 'none' }} container spacing={5}>

            <Grid sm={2} lg={1.6} xl={1.46}>
                <Box sx={{ padding: 1, backgroundColor: '#e4e4e4', boxShadow: '10px 10px 20px #c4c4c4, -10px -10px 20px #ffffff', borderRadius: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 1 }}>
                    <IconButton sx={{ padding: 1.5, border: 'none', backgroundColor: '#e4e4e4', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px #c4c4c4, inset -5px -5px 5px #ffffff' }}>
                        <ShoppingCartOutlinedIcon />
                    </IconButton>

                    {userPresence ? (
                        <Dropdown>
                            <MenuButton sx={{ padding: 1.5, border: 'none', backgroundColor: '#e4e4e4', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px #c4c4c4, inset -5px -5px 5px #ffffff' }}>
                                <AccountCircleOutlinedIcon />
                            </MenuButton>
                            <Menu>
                                <MenuItem>Add item</MenuItem>
                            </Menu>
                        </Dropdown>
                    ) : (
                        <IconButton sx={{ padding: 1.5, border: 'none', backgroundColor: '#e4e4e4', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px #c4c4c4, inset -5px -5px 5px #ffffff' }}>
                            <LoginOutlinedIcon />
                        </IconButton>
                    )}

                    <IconButton sx={{ padding: 1.5, border: 'none', backgroundColor: '#e4e4e4', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px #c4c4c4, inset -5px -5px 5px #ffffff' }}>
                        <FavoriteBorderOutlinedIcon />
                    </IconButton>

                </Box>
            </Grid>


            <Grid lg={6}>
                <Box sx={{ padding: 1, backgroundColor: '#e4e4e4', boxShadow: '10px 10px 20px #c4c4c4, -10px -10px 20px #ffffff', borderRadius: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 1 }}>
                    <Input sx={{ padding: 1.5, border: 'none', backgroundColor: '#e4e4e4', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px #c4c4c4, inset -5px -5px 5px #ffffff' }} fullWidth placeholder='جستجو' endDecorator={<IconButton sx={{mr:2}}><SearchOutlinedIcon /></IconButton>} />
                </Box>
            </Grid>

            <Grid lg={1.9}>
                <Box sx={{ padding: 1, backgroundColor: '#e4e4e4', boxShadow: '10px 10px 20px #c4c4c4, -10px -10px 20px #ffffff', borderRadius: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 1 }}>
                    <Dropdown>
                        <MenuButton fullWidth startDecorator={<Typography noWrap>دسته بندی کالاها</Typography>} sx={{ gap: 1, padding: 2, border: 'none', backgroundColor: '#e4e4e4', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px #c4c4c4, inset -5px -5px 5px #ffffff' }}>
                            <CategoryIcon />
                        </MenuButton>
                        <Menu sx={{ padding: 1, backgroundColor: '#e4e4e4', boxShadow: '10px 10px 20px #c4c4c4, -10px -10px 20px #ffffff', borderRadius: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 1 }}>
                            <MenuItem sx={{ padding: 1.5, border: 'none', backgroundColor: '#e4e4e4', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px #c4c4c4, inset -5px -5px 5px #ffffff' }}>Add item</MenuItem>
                        </Menu>
                    </Dropdown>
                </Box>
            </Grid>
            <Grid>
                <Box>
                    <img src={logi} height='35rem' width='auto' alt='logo' />
                </Box>
            </Grid>

        </Grid>

    )
}

export default NavBar
