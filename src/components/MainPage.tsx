'use client';
import React, { useEffect, useState } from 'react';
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
    Paper,
    TextField,
    InputAdornment,
    Slide,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { animated, useSpring } from 'react-spring';

export default function MainPage() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchVisible, setSearchVisible] = useState(false);
    const images = ["/first-image-slider.png", "/second-image-slider.png", "/third-image-slider.png"];
    const texts = ["CULTURAL MAKEUP", "COMMUNITY PLATFORM", "ENGAGING TUTORIALS"];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSearchToggle = () => {
        setSearchOpen(!searchOpen);
        setSearchVisible(!searchVisible);
    };

    // Use React-Spring for smooth transitions
    const transitions = useSpring({
        opacity: 0,
        from: { opacity: 1 },
        reset: true,
        onRest: () => {
            // Change to the next image and text
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        },
        config: {
            duration: 5000, // 5 seconds for each transition

        },
    });

    useEffect(() => {
        let animationFrameId: any;
        let lastTimestamp = 0;
        const animationSpeed = 5000; // 5 seconds per animation

        const animate = (timestamp: number) => {
            if (!lastTimestamp) {
                lastTimestamp = timestamp;
            }

            const elapsed = timestamp - lastTimestamp;

            if (elapsed > animationSpeed) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                lastTimestamp = timestamp;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        // Start the animation loop
        animationFrameId = requestAnimationFrame(animate);

        // Clean up the animation frame when the component unmounts
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

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
                                    color: (theme) => theme.palette.primary.main,
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
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 1 }}>
                        <Slide direction="left" in={searchVisible}>
                            <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
                                <TextField
                                    id="search-textfield"
                                    placeholder="Search..."
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    sx={{ borderRadius: '8px', backgroundColor: '#fff', width: "300px" }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <IconButton color="error" onClick={handleSearchToggle}>
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                        </Slide>

                        {/* Search Icon */}
                        <IconButton color="info" onClick={handleSearchToggle}>
                            <Slide direction="left" in={!searchVisible}>
                                <SearchIcon />
                            </Slide>
                        </IconButton>

                        <IconButton color="info" onClick={handleMenuOpen}>
                            <PersonOutlineIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box sx={{ minHeight: '800px', position: 'relative' }}>
                <animated.div style={transitions}>
                    <Image src={images[currentIndex]} layout="fill" objectFit="cover" quality={100} alt="Cultural Makeup" />
                    <Typography sx={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }} variant="h2" fontWeight={500} gutterBottom color="primary" width="100%">
                        {texts[currentIndex]}
                    </Typography>
                </animated.div>
                <Box sx={{ position: 'absolute', top: '83%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'common.white' }}>

                    <Typography variant="subtitle1" mt={2}>
                        Join our vibrant community platform to connect with makeup enthusiasts, share insights, and engage in discussions about the timeless allure of Egyptian beauty.
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <Button
                            variant="contained"
                            sx={{
                                mr: 1,
                                color: 'white',
                                '&:hover': { backgroundColor: (theme) => theme.palette.primary.main, transition: 'background-color 0.3s' },
                            }}
                        >
                            Sign In
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                color: (theme) => theme.palette.primary.main,
                                '&:hover': {
                                    borderColor: (theme) => theme.palette.primary.main,
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

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
        </Box >
    );
}
