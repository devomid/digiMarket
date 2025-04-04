import { Box, IconButton } from '@mui/joy'
import React, { useEffect, useRef, useState } from 'react'
import img1 from '../../assets/sliderImg1.jpg'
import img2 from '../../assets/sliderImg2.jpg'
import img3 from '../../assets/sliderImg3.jpg'
import img4 from '../../assets/sliderImg4.jpg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const ImageSlider = () => {
  const images = [img1, img2, img3, img4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImg = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const lastImg = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    // <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', height:'100%' }}>
          <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', borderRadius: '0.8rem' }} />
      </Box>
    // </Box>
  )
}

export default ImageSlider;
{/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
  <Box sx={{ padding: 1, backgroundColor: '#e4e4e4', boxShadow: '10px 10px 20px #c4c4c4, -10px -10px 20px #ffffff', borderRadius: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 1 }}>
    <Box sx={{ padding: 1.5, border: 'none', backgroundColor: '#e4e4e4', borderRadius: '0.8rem', boxShadow: currentImageIndex === 0 ? '5px 5px 5px #c4c4c4, -5px -5px 5px #ffffff' : 'inset 5px 5px 5px #c4c4c4, inset -5px -5px 5px #ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></Box>
  </Box>
  <Box sx={{ padding: 1, backgroundColor: '#e4e4e4', boxShadow: '10px 10px 20px #c4c4c4, -10px -10px 20px #ffffff', borderRadius: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 1 }}>
    <Box sx={{ padding: 1.5, border: 'none', backgroundColor: '#e4e4e4', borderRadius: '0.8rem', boxShadow: currentImageIndex === 1 ? '5px 5px 5px #c4c4c4, -5px -5px 5px #ffffff' : 'inset 5px 5px 5px #c4c4c4, inset -5px -5px 5px #ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></Box>
  </Box>
  <Box sx={{ padding: 1, backgroundColor: '#e4e4e4', boxShadow: '10px 10px 20px #c4c4c4, -10px -10px 20px #ffffff', borderRadius: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 1 }}>
    <Box sx={{ padding: 1.5, border: 'none', backgroundColor: '#e4e4e4', borderRadius: '0.8rem', boxShadow: currentImageIndex === 2 ? '5px 5px 5px #c4c4c4, -5px -5px 5px #ffffff' : 'inset 5px 5px 5px #c4c4c4, inset -5px -5px 5px #ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></Box>
  </Box>
  <Box sx={{ padding: 1, backgroundColor: '#e4e4e4', boxShadow: '10px 10px 20px #c4c4c4, -10px -10px 20px #ffffff', borderRadius: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 1 }}>
    <Box sx={{ padding: 1.5, border: 'none', backgroundColor: '#e4e4e4', borderRadius: '0.8rem', boxShadow: currentImageIndex === 3 ? '5px 5px 5px #c4c4c4, -5px -5px 5px #ffffff' : 'inset 5px 5px 5px #c4c4c4, inset -5px -5px 5px #ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></Box>
  </Box>
</Box> */}