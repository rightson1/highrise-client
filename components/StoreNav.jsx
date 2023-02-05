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
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Badge } from '@mui/material';
import { useRouter } from 'next/router'
function StoreNav() {
    const { colors, setOpen, cart } = useGlobalProvider()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const router = useRouter()
    const { store } = router.query
    const cartLength = cart.find(item => item?.id === store)?.items?.length
    const handleOpenNavMenu = (event) => {
        setOpen(true)
    };
    const navItems = [
        {
            name: "Home",
            link: `/stores/${store}`
        },
        {
            name: "About Us",
            link: `/stores/${store}/about`

        },


    ]

    return (
        <Box

            sx={{
                flexGrow: 1,
                position: "fixed",
                width: "100%",
                top: 0,
                zIndex: 1000,
                left: 0,
                // bgcolor: 'transparent !important',

            }}
            className="bg-primary"
        >
            <AppBar position="static" sx={{
                background: 'inherit',


            }} className="shadow-md mb-[2px]">

                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ display: { xs: 'flex' } }}>
                            <IconButton
                                sx={{ display: { xs: 'block', md: 'none' } }}
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
                            <Button className='font-bold text-xl'
                                onClick={() => router.push(`/`)}
                                sx={{
                                    display: { xs: 'none', md: 'block' },
                                    fontFamily: 'Atomic Age', color: colors.grey[200]
                                }}

                            >
                                H-Foods
                            </Button>

                        </Box>



                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', justifyContent: 'center', bgcolor: 'red' } }}>
                            {navItems.map((page, index) => (
                                <Button
                                    key={index}
                                    onClick={() => router.push(`${page.link}`)}
                                    sx={{ my: 2, color: colors.grey[600], display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }} className="flex flex-row-reverse">

                            <Button
                                onClick={() => router.push(`/stores/${store}/carts`)}
                                sx={{
                                    display: { md: 'block' },
                                    color: colors.grey[200]
                                }}
                            >
                                <Badge
                                    badgeContent={cartLength} color="primary">
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


export default StoreNav;