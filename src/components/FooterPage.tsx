'use client';
import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(4, 2),
    backgroundColor: '#000',
    color: 'white',
}));

export const FooterLink = styled(Link)({
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
        color: '#CAAE77'
    },
    my: 0.5
});

const WhiteBorder = styled(Box)({
    height: '0.4px',
    background: 'white',
    width: '80%',
    margin: '1rem 0',
    textAlign: 'center'
});

const Footer = () => {
    return (
        <FooterContainer maxWidth={false}>
            <Grid container spacing={2} justifyContent="space-between" mx={1}>
                <Grid item xs={12} sm={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 1 }}>
                        <img src="website-icon.png" alt="Amunique Logo" style={{ height: 30 }} />
                        <Typography variant="h6" fontFamily="initial">
                            AMUNIQUE
                        </Typography>
                    </Box>
                    <FooterLink href="#" sx={{ my: 1 }}>
                        <Typography variant="body1">hello@amunique.com</Typography>
                    </FooterLink>

                    <Typography variant="body1" my={1}>+1 (201) 895-3801</Typography>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Typography variant="h6" gutterBottom>
                        Company
                    </Typography>
                    <Stack>
                        <FooterLink href="#">Blog</FooterLink>
                        <FooterLink href="#">Careers</FooterLink>
                        <FooterLink href="#">Pricing</FooterLink>
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Typography variant="h6" gutterBottom>
                        Resources
                    </Typography>
                    <Stack>
                        <FooterLink href="#">Documentation</FooterLink>
                        <FooterLink href="#">Papers</FooterLink>
                        <FooterLink href="#">Press Conferences</FooterLink>
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Typography variant="h6" gutterBottom>
                        Legal
                    </Typography>
                    <Stack>
                        <FooterLink href="#">Terms of Service</FooterLink>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <FooterLink href="#">Cookies Policy</FooterLink>
                    </Stack>
                </Grid>
            </Grid>
            <Box width="100%" display="flex" justifyContent={"center"} my={2}>
                <WhiteBorder />
            </Box>
            <Grid container justifyContent="space-between" alignItems="center" paddingX={3} mt={2}>
                <Typography variant="body2" color="primary">
                    © 2023 Amunique Inc.
                </Typography>
                <Box>
                    <Link href="https://instagram.com" target="_blank" rel="noopener" sx={{ mx: 1 }}>
                        <InstagramIcon sx={{ color: 'white' }} />
                    </Link>
                    <Link href="https://facebook.com" target="_blank" rel="noopener" sx={{ mx: 1 }}>
                        <FacebookIcon sx={{ color: 'white' }} />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener" sx={{ mx: 1 }}>
                        <TwitterIcon sx={{ color: 'white' }} />
                    </Link>

                </Box>
            </Grid>
        </FooterContainer>
    );
};

export default Footer;
