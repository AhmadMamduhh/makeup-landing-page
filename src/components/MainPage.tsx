'use client';
import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    InputBase,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

export default function MainPage() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSearchToggle = () => {
        setSearchOpen(!searchOpen);
    };

    return (
        <Box sx={{ bgcolor: '#1E1E1E', position: 'relative', minHeight: '100vh' }}>
            <AppBar position="absolute" sx={{ backgroundColor: '#00000055', backdropFilter: 'blur(5px)' }}>
                <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar alt="User Avatar" src="/user-avatar.jpg" sx={{ width: 32, height: 32 }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flex: 1, justifyContent: 'center' }}>
                        <Typography
                            variant="h6"
                            color="white"
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                    color: theme => theme.palette.primary.main,
                                    transition: 'color 0.3s',
                                },
                            }}
                        >
                            Shop
                        </Typography>
                        <Typography
                            variant="h6"
                            color="white"
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                    color: theme => theme.palette.primary.main,
                                    transition: 'color 0.3s',
                                },
                            }}
                        >
                            Tutorials
                        </Typography>
                        <Typography
                            variant="h6"
                            color="white"
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                    color: theme => theme.palette.primary.main,
                                    transition: 'color 0.3s',
                                },
                            }}
                        >
                            About Us
                        </Typography>
                        <Typography
                            variant="h6"
                            color="white"
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                    color: theme => theme.palette.primary.main,
                                    transition: 'color 0.3s',
                                },
                            }}
                        >
                            News
                        </Typography>
                        <Typography
                            variant="h6"
                            color="white"
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                    color: theme => theme.palette.primary.main,
                                    transition: 'color 0.3s',
                                },
                            }}
                        >
                            Community
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton color="info" onClick={handleSearchToggle} >
                            <SearchIcon />
                        </IconButton>
                        <IconButton color="info" onClick={handleMenuOpen}>
                            <PersonOutlineIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box sx={{ minHeight: '800px', position: 'relative' }}>
                <Image
                    src="/first-image-slider.png"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="Cultural Makeup"
                />

                <Box sx={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'common.white' }}>
                    <Typography variant="h2" fontWeight={500} gutterBottom color="primary" width="100%">
                        CULTURAL MAKEUP
                    </Typography>
                    <Typography variant="subtitle1" mt={2}>
                        Join our vibrant community platform to connect with makeup enthusiasts, share insights, and engage in discussions about the timeless allure of Egyptian beauty.
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <Button
                            variant="contained"
                            sx={{
                                mr: 1,
                                color: 'white',
                                '&:hover': { backgroundColor: theme => theme.palette.primary.main, transition: 'background-color 0.3s' },
                            }}
                        >
                            Sign In
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                color: theme => theme.palette.primary.main,
                                '&:hover': {
                                    borderColor: theme => theme.palette.primary.main,
                                    color: 'common.white',
                                    transition: 'color 0.3s, border-color 0.3s',
                                },
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Box>

            {searchOpen && (
                <Box sx={{ position: 'absolute', top: '15%', left: '80%', transform: 'translate(-50%, -50%)', textAlign: 'center', backgroundColor: 'common.white', padding: '8px', borderRadius: '4px' }}>
                    <InputBase placeholder="Search..." sx={{ width: '300px' }} />
                    <IconButton onClick={handleSearchToggle}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
}

