'use client';
import React from 'react';
import { Box, Typography, Button, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';
import { FooterLink } from '../FooterPage';
import ReviewsCarousel from './ReviewsCarousel';

const CustomerReviews = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const reviews = ['reviews/review-1.png', 'reviews/review-2.png', 'reviews/review-3.png']

    return (
        <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#f5f5f5', position: 'relative' }}>
            {/* Makeup community header */}
            < Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="subtitle1" fontSize="1.5rem" color="#1E1E1E">
                    Join Our Makeup Community
                </Typography>
                <Typography variant="h4" color="#1F1FB9" fontFamily={"initial"} fontWeight={500} >
                    Our Makeup Looks
                </Typography>
                <Typography variant="subtitle1" color="#1E1E1E">
                    Share, Learn, and Create Together
                </Typography>
            </Box >

            <Box position="absolute" width="1000px" height="900px" top={"0%"} left="0%">
                <img src="background.png" alt="background-1" style={{ objectFit: 'fill', opacity: 0.05 }} />
            </Box>

            {/* Row of images */}
            <Grid container spacing={1} justifyContent="center" mx={1} position="relative" zIndex={1}>
                {['Malak', 'Layla', 'Aya'].map((name) => (
                    <Grid item xs={12} sm={6} md={4} key={name}>
                        <Box sx={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                            <img src={`/makeup-look/${name.toLowerCase()}.png`} alt={`${name}'s Look`} style={{ objectFit: 'contain', width: '400px', height: '410px' }} />
                            <Box sx={{
                                position: 'absolute',
                                bottom: '10%',
                                left: '19%',
                                width: '100%',
                                textAlign: 'left',
                                color: 'white',
                            }}>
                                <Typography variant="h6" fontFamily="initial" fontWeight={500} fontSize="26px">
                                    {name}'s Look
                                </Typography>
                                <FooterLink href="#" sx={{ textDecoration: 'underline' }}>
                                    <Typography variant="body1" fontSize="0.8rem">View More</Typography>
                                </FooterLink>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Customer Reviews */}
            < Box sx={{ textAlign: 'center', mb: 2, mt: 15 }}>
                <Typography variant="subtitle1" fontSize="1.5rem" color="#1E1E1E">
                    Customer Reviews
                </Typography>
                <Typography variant="h4" color="#1F1FB9" fontFamily={"initial"} fontWeight={500} >
                    What Our Customers Say
                </Typography>
                <Typography variant="subtitle1" color="#1E1E1E">
                    Real Experiences, Real Opinions
                </Typography>
            </Box >

            {/* Carousel Section */}
            <Box mb={3} zIndex={3} position="relative">
                <ReviewsCarousel images={reviews} />
            </Box>

            <Box position="absolute" width="1000px" height="900px" bottom={"20%"} right="0%">
                <img src="background-3.png" alt="background-3" style={{ objectFit: 'contain', opacity: 0.9 }} />
            </Box>


            {/* Call to action */}
            < Box sx={{ textAlign: 'center', mb: 2, mt: 10 }}>
                <Typography variant="subtitle1" fontSize="1.5rem" color="#1E1E1E">
                    Start Exploring Now
                </Typography>
                <Typography variant="h4" color="#1F1FB9" fontFamily={"initial"} fontWeight={500} >
                    Ready to Begin Your Beauty Journey?
                </Typography>
                <Typography variant="subtitle1" color="#1E1E1E">
                    Discover the Essence of Beauty Today and become a part of our community
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 5, paddingX: 5 }}>
                    Start Learning
                </Button>
            </Box>
        </Box >
    );
};

export default CustomerReviews;
