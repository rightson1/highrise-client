import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InfoIcon from '@mui/icons-material/Info';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useGlobalProvider } from '../utils/themeContext';
import { Dashboard, MessageOutlined, Person, PersonOutlined, Sell } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/authContext';
export default function TemporaryDrawer() {
    const { open, setOpen, colors } = useGlobalProvider()
    const { admin, logout } = useAuth()

    const router = useRouter()

    const toggleDrawer = (click) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(click);
    };

    const list = () => (
        <Box
            sx={{
                width: 250,
                height: '100%',
                py: 2,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className="bg-bgEn"
        >
            <Box className="flex justify-end">
                <IconButton className='self-end jus'>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Typography
                variant="h6"
                noWrap


                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'flex' },
                    justifyContent: 'center',
                    fontFamily: 'Atomic Age',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: colors.gasButton,
                    textDecoration: 'none',
                    fontSize: {
                        xs: '1.3rem',
                        md: '1.5rem'
                    },

                }}
            >
                Gassies
            </Typography>

            <List className=''
            >
                {
                    listItems.map((item, index) => {


                        return (

                            item.name == 'Sell' ? <ListItem component="a" target="_blank" href={item.link} key={index} className="flex justify-center"

                                sx={{
                                    color: item.link === router.pathname ? colors.gasButton : colors.primary[100],


                                }} >
                                <ListItemButton sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }} >
                                    <Typography fontFamily="Nunito" sx={{
                                        fontWeight: 'bold',
                                        fontSize: '1.1rem',
                                    }}>
                                        {item.name}
                                    </Typography>
                                </ListItemButton>
                            </ListItem> :
                                <ListItem key={index} sx={{
                                    display: 'flex',

                                    color: item.link === router.pathname ? colors.gasButton : colors.primary[100],


                                }} >
                                    <ListItemButton sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }} onClick={() => router.push(item.link)}>
                                        <Typography fontFamily="Nunito" sx={{
                                            fontWeight: 'bold',
                                            fontSize: '1.25rem',
                                        }}>
                                            {item.name}
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>

                        )

                    })
                }
            </List>
            <Box px={3}>
                {
                    admin ? <Button className='w-full'
                        sx={{
                            bgcolor: colors.gasButton + ' !important',
                            color: colors.bg + ' !important',
                        }}
                        onClick={logout}
                    >
                        Logout
                    </Button> : <Button className='w-full'
                        sx={{
                            bgcolor: colors.gasButton + ' !important',
                            color: colors.bg + ' !important',
                        }}
                        onClick={() => router.push('/login')}
                    >
                        Login
                    </Button>
                }
            </Box>
        </Box>
    );

    return (
        <div>

            <React.Fragment >
                <Drawer
                    anchor="left"
                    open={open}

                    onClose={toggleDrawer(false)}
                    sx={{
                        '& .MuiDrawer-paper': {
                            background: colors.bg + ' !important',


                        },

                    }}
                >
                    {list()}
                </Drawer>
            </React.Fragment>

        </div>
    );
}

const listItems = [

    {
        name: 'Home',
        link: '/gas',
        icon: <Dashboard />

    },
    {
        name: 'Hfoods',
        link: '/',
        icon: <Dashboard />

    },

    {
        name: 'How It Works',
        link: '/about',
        icon: <InfoIcon />
    },
    {
        name: 'Stores',
        link: '/gas/search',
    },
    {
        name: 'Orders',
        link: '/gas/orders',
    },
    {
        name: 'Sell',
        link: "https://h-foods-theta.vercel.app/",
        icon: <Sell />
    },



]