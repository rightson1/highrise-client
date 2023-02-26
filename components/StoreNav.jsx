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
import { useSingleBusinessQuery } from "../utils/hooks/useBusiness";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
function StoreNav() {
    const { colors, setOpen, cart } = useGlobalProvider()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const router = useRouter()
    const { store } = router.query
    const { data: business } = useSingleBusinessQuery(store)
    const cartLength = cart.find(item => item?.id === store)?.items?.length
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
    },

    {
        name: 'About Us',
        link: '/about'
    }
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
                    <Toolbar disableGutters className='flex justify-between'>
                        <Box sx={{ display: { xs: 'flex' } }}>

                            <Button className='font-bold text-xl'
                                onClick={() => router.push(`/stores/${store}`)}
                                sx={{

                                    fontFamily: 'Atomic Age', color: colors.grey[200]
                                }}

                            >
                                {business?.name}
                            </Button>

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



                        <Box sx={{ flexGrow: 0 }} className="flex ">


                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                onClick={() => router.push(`/stores/${store}/search`)}
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
                                onClick={() => router.push(`/stores/${store}/carts`)}
                                size="large"
                                sx={{
                                    display: { md: 'block' },
                                    color: colors.grey[200]
                                }}
                            >
                                <Badge
                                    badgeContent={cartLength} color="primary">
                                    <ShoppingCartOutlinedIcon />
                                </Badge>

                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}


export default StoreNav;