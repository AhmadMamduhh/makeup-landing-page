'use client';
import React, { useEffect, useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem,
    TextField,
    InputAdornment,
    Slide,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import theme from './theme/theme';

export default function MainPage() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchVisible, setSearchVisible] = useState(false);
    const images = ["/first-image.png", "/second-image.png", "/third-image.png"];
    const texts = ["CULTURAL MAKEUP", "COMMUNITY PLATFORM", "ENGAGING TUTORIALS"];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isEntryPoint, setIsEntryPoint] = useState(true);


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

    useEffect(() => {
        let intervalId: any;

        const changeImage = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            if (isEntryPoint)
                setIsEntryPoint(false)
        };

        // Change the image every 5 seconds
        intervalId = setInterval(changeImage, 4000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Box sx={{ bgcolor: '#000', position: 'relative', minHeight: '105vh', }}>
            <AppBar position="absolute" sx={{ backgroundColor: '#00000055', backdropFilter: 'blur(5px)' }}>
                <Toolbar sx={{ display: "flex", justifyContent: 'space-between', py: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Image src={"/website-icon.png"} objectFit="fill" quality={100} width={32} height={40} alt={`amunique icon`} />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4, marginLeft: 'auto', marginRight: '10px' }}>
                        <Typography
                            variant="h6"
                            color="white"
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                    color: (theme) => theme.palette.primary.main,
                                    transition: 'color 0.3s',
                                },
                                textAlign: 'center'
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
                                textAlign: 'center'
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
                                textAlign: 'center'
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
                                textAlign: 'center'
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
                                textAlign: 'center'
                            }}
                        >
                            Community
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
                        {!searchOpen && <IconButton color="info" onClick={handleSearchToggle}>
                            <Slide direction="left" in={!searchVisible}>
                                <SearchIcon />
                            </Slide>
                        </IconButton>}

                        <IconButton color="info" onClick={handleMenuOpen} style={{ marginRight: '5px' }}>
                            <PersonOutlineIcon />
                        </IconButton>
                        <Button
                            variant="outlined"
                            sx={{
                                textTransform: 'none',
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
                </Toolbar>
            </AppBar>

            <Box sx={{ height: '90vh', position: 'relative', }}>
                {images.map((image, index) => (
                    <Box width="900px" display="flex" justifyContent="center" >
                        <Slide key={index} direction={index === currentIndex ? 'right' : 'left'} in={index === currentIndex} mountOnEnter unmountOnExit timeout={{ enter: index === 0 && isEntryPoint ? 0 : 1000, exit: 1000 }}>
                            <Image src={image} objectFit="contain" quality={100} layout="fill" alt={`Slide ${index}`} style={{ marginTop: '30px' }} />
                        </Slide>
                    </Box>
                ))}

                {currentIndex === 0 && <Box sx={{
                    position: 'absolute', top: '15%', left: '26%',
                    borderRight: `4px solid ${theme.palette.primary.main}`,
                    borderTop: `4px solid ${theme.palette.primary.main}`,
                    width: '45%',
                    height: '65%'
                }} />}

                {currentIndex === 1 && <Box sx={{
                    position: 'absolute', top: '28%', left: '26%',
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                    borderBottom: `4px solid ${theme.palette.primary.main}`,
                    width: '50%',
                    height: '50%'
                }} />}

                {currentIndex === 2 && <Box sx={{
                    position: 'absolute', top: '13%', left: '26%',
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                    borderBottom: `4px solid ${theme.palette.primary.main}`,
                    width: '27%',
                    height: '65%'
                }} />}

                <Box sx={{ textAlign: 'center', color: 'common.white', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'absolute', top: '95%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0, 0, 0, 0.4)', width: '100%' }}>
                    <Typography sx={{ textAlign: 'center' }} variant="subtitle1" fontSize="4.5rem" fontWeight={500} margin={0} color="primary" width="100%" fontFamily={"initial"}>
                        {texts[currentIndex]}
                    </Typography>
                    <Box display="flex" justifyContent={'center'} mt={-1.5}>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ width: '800px', textAlign: 'center' }}>
                            Join our vibrant community platform to connect with makeup enthusiasts, share insights, and engage in discussions about the timeless allure of Egyptian beauty.
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 2.5, display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            sx={{
                                color: 'black',
                                paddingX: 5
                            }}
                        >
                            Start Learning
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
