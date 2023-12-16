import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import theme from '../theme/theme';

interface ReviewsCarouselInterface {
    images: string[];
}

const ReviewsCarousel: React.FC<ReviewsCarouselInterface> = ({ images }) => {
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

            <Box mx={3.5} sx={{
                position: 'relative',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '500px',
                height: '300px',
                marginBottom: '50px',
                marginTop: '20px',
                mx: 5,
                borderRight: `4px solid ${theme.palette.primary.main}`,
                borderBottom: `4px solid ${theme.palette.primary.main}`
            }}>
                <img src={images[currentIndex]} alt={`Product ${currentIndex + 1}`} style={{ zIndex: 3, objectFit: 'contain', width: '400px', height: '400px' }} />

            </Box>

            <IconButton onClick={handleNext} size="large" style={{ borderRadius: '50%', border: '1.5px solid #1E1E1E', padding: '10px' }}>
                <ArrowForwardIosIcon fontSize='large' color="secondary" />
            </IconButton>
        </Box>
    );
};

export default ReviewsCarousel;
