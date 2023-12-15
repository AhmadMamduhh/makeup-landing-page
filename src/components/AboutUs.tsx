'use client';
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/system';
import theme from './theme/theme';

const AboutUsWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100vh',
    backgroundColor: '#000',
    position: 'relative'
}));

const TextSection = styled('div')(({ theme }) => ({
    width: '60%',
    height: '60%',
    marginRight: theme.spacing(4),
    padding: '40px',
    marginTop: '10%',
    marginLeft: '40px',
    borderTop: '5px solid #CAAE77',
    borderLeft: '5px solid #CAAE77',
    zIndex: 2
}));

const ImageSection = styled('div')({
    width: '30%',
    position: 'relative',
    zIndex: 2
});

const AboutUs = () => {
    return (
        <AboutUsWrapper>
            <Box position="absolute" width="100%" height="100%" top={"0%"} left="0%">
                <img src="background.png" alt="background-1" style={{ objectFit: 'fill', opacity: 0.05 }} />
            </Box>
            <TextSection>
                <Typography variant="h1" fontFamily={"initial"} fontWeight={400} color="primary" sx={{ position: 'relative' }}>
                    ABOUT US
                </Typography>
                <Typography variant="subtitle2" fontStyle={"italic"} fontSize="1.25rem" fontWeight={500} sx={{ color: 'white', mt: 2, width: '80%' }}>
                    Amunique is your gateway to the secrets of Ancient Egyptian beauty. Our products and services draw inspiration from the iconic makeup looks, symbols, and traditions of this remarkable culture.
                </Typography>
            </TextSection>
            <ImageSection>
                <img src="about-us-image.png" alt="About Us Image" style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
            </ImageSection>
            <Box position="absolute" width="200px" height="200px" top={"26%"} left="40%">
                <img src="background.png" alt="background-2" style={{ objectFit: 'contain', opacity: 0.05 }} />
            </Box>
        </AboutUsWrapper>
    );
};

export default AboutUs;
