import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ProductsCarouselInterface {
    images: string[];
}

const ProductCarousel: React.FC<ProductsCarouselInterface> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="center">

            <IconButton onClick={handlePrev} size="large" style={{ borderRadius: '50%', border: '1.5px solid #1E1E1E', padding: '10px' }}>
                <ArrowBackIosNewIcon fontSize='large' color="secondary" />
            </IconButton>

            <Box mx={3.5} style={{
                position: 'relative'
            }}>
                <img src={'products/glow2.png'} alt={`glow effect`} style={{ position: 'absolute', zIndex: 2, objectFit: 'fill', left: 0, top: 0, width: '210px', height: '320px', opacity: 0.7 }} />
                <img src={images[currentIndex]} alt={`Product ${currentIndex + 1}`} style={{ zIndex: 3, objectFit: 'contain', width: '200px', height: '350px' }} />

            </Box>

            <IconButton onClick={handleNext} size="large" style={{ borderRadius: '50%', border: '1.5px solid #1E1E1E', padding: '10px' }}>
                <ArrowForwardIosIcon fontSize='large' color="secondary" />
            </IconButton>
        </Box>
    );
};

export default ProductCarousel;
