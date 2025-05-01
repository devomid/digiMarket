import { Box, Dropdown, IconButton, Input, Menu, MenuButton, MenuItem, Typography } from '@mui/joy'
import React, { useState } from 'react'
import Face5OutlinedIcon from '@mui/icons-material/Face5Outlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { GeneralState } from '../../contexts/GeneralContext';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const NavBar = () => {

  const { userPresence, setUserPresence, catModal, setCatModal, setLoginModal } = GeneralState()

  return (
    <Box data-component="main" sx={{ height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingX: 4, backgroundColor: 'transparent', backdropFilter: 'blur(10.5px)' }} >
      <Box>
        {/*buttons */}
        <Box sx={{ padding: 1, backgroundColor: 'rgba(16, 4, 16, 0.1)', borderRadius: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>

          {userPresence ? (
            <Dropdown>
              <MenuButton sx={{ padding: 1.5, border: 'none', backgroundColor: 'rgba(16, 4, 16, 0.1)', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px rgba(16, 4, 16, 0.2), inset -5px -5px 5px rgb(255, 255, 255)', '&:hover': { backgroundColor: 'rgba(66, 19, 67, 0.5)', color: 'rgb(254, 222, 216)', boxShadow: 'inset 5px 5px 5px rgba(16, 4, 16, 0.1), inset -5px -5px 5px rgba(0, 0, 0, 0.5)' } }}>
                <Face5OutlinedIcon />
              </MenuButton>
              <Menu>
                <MenuItem>Add item</MenuItem>
              </Menu>
            </Dropdown>
          ) : (
            <IconButton onClick={() => setLoginModal(true)} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 1.5, border: 'none', backgroundColor: 'rgba(16, 4, 16, 0.1)', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px rgba(16, 4, 16, 0.3), inset -5px -5px 5px rgb(255, 255, 255)', '&:hover': { backgroundColor: 'rgb(66, 19, 67, 0.5)', color: 'rgb(254, 222, 216)', boxShadow: 'inset 5px 5px 5px rgba(16, 4, 16, 0.1), inset -5px -5px 5px rgba(0, 0, 0, 0.5)' } }}>
              <LoginOutlinedIcon />
            </IconButton>
          )}

          <IconButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 1.5, border: 'none', backgroundColor: 'rgba(16, 4, 16, 0.1)', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px rgba(16, 4, 16, 0.2), inset -5px -5px 5px rgb(255, 255, 255)', '&:hover': { backgroundColor: 'rgb(66, 19, 67, 0.5)', color: 'rgb(254, 222, 216)', boxShadow: 'inset 5px 5px 5px rgba(16, 4, 16, 0.1), inset -5px -5px 5px rgba(0, 0, 0, 0.5)' } }}>
            <ShoppingBagOutlinedIcon />
          </IconButton>

          <IconButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 1.5, border: 'none', backgroundColor: 'rgba(16, 4, 16, 0.1)', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px rgba(16, 4, 16, 0.2), inset -5px -5px 5px rgb(255, 255, 255)', '&:hover': { backgroundColor: 'rgb(66, 19, 67, 0.5)', color: 'rgb(254, 222, 216)', boxShadow: 'inset 5px 5px 5px rgba(16, 4, 16, 0.1), inset -5px -5px 5px rgba(0, 0, 0, 0.5)' } }}>
            <StarBorderOutlinedIcon />
          </IconButton>

          <IconButton onClick={() => setCatModal(true)} sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 1.5, border: 'none', backgroundColor: 'rgba(16, 4, 16, 0.1)', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px rgba(16, 4, 16, 0.2), inset -5px -5px 5px rgb(255, 255, 255)', '&:hover': {
              backgroundColor: 'rgb(66, 19, 67, 0.5)', color: 'rgb(254, 222, 216)', boxShadow: 'inset 5px 5px 5px rgba(16, 4, 16, 0.1), inset -5px -5px 5px rgba(0, 0, 0, 0.5)', '& .MuiTypography-root': { color: 'rgb(254, 222, 216)', }
            }, gap: 1.2
          }}>
            <Typography>دسته بندی کالا ها</Typography>
            <CategoryOutlinedIcon />
          </IconButton>

        </Box>
      </Box>
      <Box>
        {/*searchBar */}
        <Box sx={{ width: '60rem', padding: 1, backgroundColor: 'rgba(16, 4, 16, 0.1)', borderRadius: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <Input sx={{ padding: 1.5, border: 'none', backgroundColor: 'rgba(16, 4, 16, 0.1)', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px rgba(16, 4, 16, 0.2), inset -5px -5px 5px rgb(255, 255, 255)', '&:hover': { backgroundColor: 'rgb(66, 19, 67, 0.5)', color: 'rgb(254, 222, 216)', boxShadow: 'inset 5px 5px 5px rgba(16, 4, 16, 0.1), inset -5px -5px 5px rgba(0, 0, 0, 0.5)' } }} fullWidth placeholder='جستجو' endDecorator={<IconButton sx={{ mr: 2 }}><SearchOutlinedIcon /></IconButton>} />
        </Box>
      </Box>

    </Box>
  )
}

export default NavBar


// <Box Box data - component="main" sx = {{ height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingX: 4, backgroundColor: 'transparent', backdropFilter: 'blur(10.5px)' }} >
//     <Box>
//       {/*buttons */}
//       <Box sx={{ padding: 1, backgroundColor: 'rgba(66, 19, 67, 0.16)', borderRadius: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>

//         {userPresence ? (
//           <Dropdown>
//             <MenuButton sx={{ padding: 1.5, border: 'none', backgroundColor: 'rgba(66, 19, 67, 0.16)', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px rgba(66, 19, 67, 0.3), inset -5px -5px 5px rgb(255, 255, 255)', '&:hover': { backgroundColor: 'rgb(66, 19, 67, 0.5)', color: 'rgb(255, 192, 181)', boxShadow: 'inset 5px 5px 5px rgba(255, 192, 181, 0.1), inset -5px -5px 5px rgba(255, 192, 181, 0.5)' } }}>
//               <Face5OutlinedIcon />
//             </MenuButton>
//             <Menu>
//               <MenuItem>Add item</MenuItem>
//             </Menu>
//           </Dropdown>
//         ) : (
//           <IconButton onClick={() => setLoginModal(true)} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 1.5, border: 'none', backgroundColor: 'rgba(66, 19, 67, 0.1)', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px rgba(66, 19, 67, 0.3), inset -5px -5px 5px rgb(255, 255, 255)', '&:hover': { backgroundColor: 'rgb(66, 19, 67, 0.5)', color: 'rgb(255, 192, 181)',boxShadow: 'inset 5px 5px 5px rgba(255, 192, 181, 0.1), inset -5px -5px 5px rgba(255, 192, 181, 0.5)' } }}>
//             <LoginOutlinedIcon />
//           </IconButton>
//         )}

//         <IconButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 1.5, border: 'none', backgroundColor: 'rgba(66, 19, 67, 0.1)', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px rgba(66, 19, 67, 0.2), inset -5px -5px 5px rgb(255, 255, 255)', '&:hover': { backgroundColor: 'rgb(66, 19, 67, 0.3)', color: 'rgb(255, 192, 181)', boxShadow: 'inset 5px 5px 5px rgba(255, 192, 181, 0.1), inset -5px -5px 5px rgba(255, 192, 181, 0.5)'  } }}>
//           <ShoppingBagOutlinedIcon />
//         </IconButton>

//         <IconButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 1.5, border: 'none', backgroundColor: 'rgba(66, 19, 67, 0.1)', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px rgba(66, 19, 67, 0.2), inset -5px -5px 5px rgb(255, 255, 255)', '&:hover': { backgroundColor: 'rgb(66, 19, 67, 0.3)', color: 'rgb(255, 192, 181)', boxShadow: 'inset 5px 5px 5px rgba(255, 192, 181, 0.1), inset -5px -5px 5px rgba(255, 192, 181, 0.5)' } }}>
//           <StarBorderOutlinedIcon />
//         </IconButton>

//         <IconButton onClick={() => setCatModal(true)} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 1.5, border: 'none', backgroundColor: 'rgba(66, 19, 67, 0.1)', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px rgba(66, 19, 67, 0.2), inset -5px -5px 5px rgb(255, 255, 255)', '&:hover': { backgroundColor: 'rgb(66, 19, 67, 0.3)', color: 'rgb(255, 192, 181)', boxShadow: 'inset 5px 5px 5px rgba(255, 192, 181, 0.1), inset -5px -5px 5px rgba(255, 192, 181, 0.5)' }, gap: 1.2 }}>
//           <Typography>دسته بندی کالا ها</Typography>
//           <CategoryOutlinedIcon />
//         </IconButton>

//       </Box>
//     </Box>
//     <Box>
//       {/*searchBar */}
//       <Box sx={{ width: '60rem', padding: 1, backgroundColor: 'rgba(66, 19, 67, 0.1)', borderRadius: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
//         <Input sx={{ padding: 1.5, border: 'none', backgroundColor: 'rgba(66, 19, 67, 0.1)', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px rgba(66, 19, 67, 0.2), inset -5px -5px 5px rgb(255, 255, 255)', '&:hover': { backgroundColor: 'rgb(66, 19, 67, 0.3)', color: 'rgb(255, 192, 181)', boxShadow: 'inset 5px 5px 5px rgba(255, 192, 181, 0.1), inset -5px -5px 5px rgba(255, 192, 181, 0.5)' } }} fullWidth placeholder='جستجو' endDecorator={<IconButton sx={{ mr: 2 }}><SearchOutlinedIcon /></IconButton>} />
//       </Box>
//     </Box>

//   </Box >