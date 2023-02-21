import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useGlobalProvider } from "../utils/themeContext";
import { useRouter } from 'next/router'
import { useAuth } from '../utils/authContext';


const nav = [{
    name: 'Home',
    link: '/'
},
{
    name: 'Search',
    link: '/itemSearch'
}, {
    name: 'Stores',
    link: '/search'
}, {
    name: 'orders',
    link: '/orders'

}, {
    name: 'Gas',
    link: '/gas'
},

{
    name: 'About Us',
    link: '/about'
}
]
function ResponsiveAppBar() {
    const router = useRouter()
    const { logout, admin, signInWithGoogle } = useAuth();
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const { colors, setOpen } = useGlobalProvider()
    const handleOpenNavMenu = (event) => {
        setOpen(true)
    };
    return (
        <Box
            sx={{
                flexGrow: 1,
                position: "fixed",
                width: "100%",
                top: 0,
                zIndex: 1000,
                left: 0,

                // bgcolor: colors.primary[500]
            }}
            className="bg-primary "
        >
            <AppBar position="static" sx={{
                background: 'inherit',
                boxShadow: 'none',
            }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box
                            variant="h6"
                            noWrap
                            component="button"
                            onClick={() => { router.push('/') }}
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'flex' },
                                fontFamily: 'Atomic Age',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: colors.grey[100],
                                textDecoration: 'none',
                                fontSize: {
                                    xs: '1.3rem',
                                    md: '1.5rem'
                                },
                                flexGrow: {
                                    sm: 1,
                                    xs: 1,
                                    md: 0

                                }
                            }}
                        >
                            Foodie
                        </Box>


                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center', bgcolor: 'red' } }}>
                            {nav.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => { router.push(page.link) }}
                                    sx={{ my: 2, color: colors.grey[600], display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={() => router.push('/itemSearch')}
                                    color="inherit"
                                >
                                    <SearchOutlinedIcon

                                        sx={{
                                            color: colors.grey[200],
                                            fontSize: "1.8rem"
                                        }}

                                    />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon sx={{
                                        color: colors.grey[200],
                                        fontSize: "1.8rem"
                                    }} />
                                </IconButton>

                            </Box>
                            <Button onClick={handleClick}
                                sx={{
                                    display: { xs: 'none', md: 'block' },
                                    bgcolor: colors.orange[500] + '!important',
                                    color: colors.grey[200]
                                }}
                            >Profile</Button>

                            <Menu
                                anchorEl={anchorEl}
                                open={isOpen}
                                onClose={handleClose}
                                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            >
                                {!admin ? <MenuItem sx={{ fontFamily: 'Atomic Age', fontWeight: 700, }}
                                    onClick={() => router.push('/login')}
                                >Login</MenuItem>
                                    : <MenuItem sx={{ fontFamily: 'Atomic Age', fontWeight: 700, }}

                                        onClick={() => logout()}
                                    >Logout</MenuItem>

                                }
                                {!admin ? <MenuItem sx={{ fontFamily: 'Atomic Age', fontWeight: 700, }}
                                    onClick={() => router.push('/register')}
                                >Create Account</MenuItem>
                                    : <MenuItem sx={{ fontFamily: 'Atomic Age', fontWeight: 700, }}
                                        onClick={() => router.push('/profile')}
                                    >Profile</MenuItem>

                                }
                                <MenuItem sx={{ fontFamily: 'Atomic Age', fontWeight: 700, }} component="a" href="https://forms.gle/1MjoS9yVTudTBiM46"
                                    tabIndex={-1} target="_blank" rel="noopener noreferrer"
                                >Register Business</MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
export default ResponsiveAppBar;
