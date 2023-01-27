import * as React from 'react';
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
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
; import { useGlobalProvider } from "../utils/themeContext";
import { Badge } from '@mui/material';
import { useRouter } from 'next/router'
function StoreNav() {
    const { colors, setOpen } = useGlobalProvider()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const router = useRouter()

    const handleOpenNavMenu = (event) => {
        setOpen(true)
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };



    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box

            sx={{
                flexGrow: 1,
                // position: "sticky",
                width: "100%",
                top: 0,
                zIndex: 1000,
                left: 0,
                // bgcolor: 'transparent !important',

            }}
            className="bg-primary shadow-md"
        >
            <AppBar position="static" sx={{
                background: 'inherit',
                boxShadow: 'none',

            }} className="shadow-md">

                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap


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
                            H-Foods
                        </Typography>


                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center', bgcolor: 'red' } }}>
                            {navItems.map((page) => (
                                <Button
                                    key={page}
                                    onclick={() => router.push(`/store/${page.link}`)}
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
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon sx={{
                                        color: colors.grey[200],
                                        fontSize: "1.8rem"
                                    }} />
                                </IconButton>

                            </Box>
                            <Button
                                sx={{
                                    display: { xs: 'none', md: 'block' },
                                    color: colors.grey[200]
                                }}
                            >
                                <Badge
                                    badgeContent={4} color="primary">
                                    <ShoppingCartOutlinedIcon />
                                </Badge>

                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

const navItems = [
    {
        name: "Home",
        link: "/"

    },
    {
        name: "Search",
        link: "/search"
    },
    {
        name: "Live Chat",
        link: "/chat"
    }
]
export default StoreNav;