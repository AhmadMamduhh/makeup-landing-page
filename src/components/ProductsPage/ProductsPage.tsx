'use client';
import React from 'react';
import {
    Box,
    Typography,
    IconButton,
    Grid,
    Paper,
} from '@mui/material';
import ProductCarousel from './ProductCarousel';

const ProductsPage = () => {
    const products = ['products/product1.png', 'products/product2.png', 'products/product3.png', 'products/product4.png']
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px', position: 'relative', }}>
            {/* Top Section */}
            < Box sx={{ textAlign: 'center', mb: 4, mt: 3 }}>
                <Typography variant="subtitle1" fontSize="1.5rem" color="#1E1E1E">
                    Featured Products
                </Typography>
                <Typography variant="h4" color="#1F1FB9" fontFamily={"initial"} fontWeight={500} >
                    Explore Our Selection
                </Typography>
                <Typography variant="subtitle1" color="#1E1E1E">
                    Experience the essence of cultural beauty
                </Typography>
            </Box >

            <Box position="absolute" width="1000px" height="900px" top={"0%"} left="0%">
                <img src="background.png" alt="background-1" style={{ objectFit: 'fill', opacity: 0.05 }} />
            </Box>

            {/* Carousel Section */}
            <Box mb={5} zIndex={3}>
                <ProductCarousel images={products} />
            </Box>

            {/* Texts Below Carousel */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="subtitle1" fontSize="1.5rem" color="#1E1E1E">
                    Our Services
                </Typography>
                <Typography variant="h4" color="#1F1FB9" fontFamily={"initial"} fontWeight={500} >
                    Discover Our Offerings
                </Typography>
                <Typography variant="subtitle1" color="#1E1E1E">
                    Discover Quality, Culture, and Artistry
                </Typography>
            </Box>

            <Box position="absolute" width="1000px" height="900px" top={"50%"} left="50%">
                <img src="background.png" alt="background-2" style={{ objectFit: 'fill', opacity: 0.05 }} />
            </Box>

            {/* Grid Section */}
            <Box display="flex" alignItems="center" justifyContent=" center" width="100%" paddingX={10}>
                <Grid container textAlign={"center"} spacing={1}>
                    <Grid item xs={6} md={4}>
                        <img src="services/product-1.png" alt="Product 1" style={{ width: '300px', height: '319px' }} />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <img src="services/product-2.png" alt="Product 2" style={{ width: '300px', height: '319px' }} />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <img src="services/product-3.png" alt="Product 3" style={{ width: '300px', height: '319px' }} />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <img src="services/product-4.png" alt="Product 4" style={{ width: '300px', height: '319px' }} />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <img src="services/product-5.png" alt="Product 5" style={{ width: '300px', height: '319px' }} />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <img src="services/product-6.png" alt="Product 6" style={{ width: '300px', height: '319px' }} />
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
};

export default ProductsPage;
