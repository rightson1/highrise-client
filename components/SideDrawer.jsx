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

export default function TemporaryDrawer() {
    const { open, setOpen, colors } = useGlobalProvider()
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
                bgcolor: colors.bg + ' !important',
                height: '100%',
                py: 5,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className="row"
        >
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
                    color: colors.find,
                    textDecoration: 'none',
                    fontSize: {
                        xs: '1.3rem',
                        md: '1.5rem'
                    },

                }}
            >
                H-Foods
            </Typography>

            <List
            >
                {
                    listItems.map((item, index) => {
                        if (item.link) {
                            return (
                                <ListItem key={index} button component="a" href={item.link}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItem>
                            )

                        } else {
                            return (
                                <ListItem key={index} sx={{
                                    color: colors.find,
                                    mt: 2

                                }} >
                                    <ListItemText primary={item.name} sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }} />
                                </ListItem>
                            )
                        }


                    })
                }
            </List>
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
        name: 'Dashboard',
    },
    {
        name: 'Home',
        link: '/',
        icon: <Dashboard />

    },
    {
        name: 'General',

    }, {
        name: 'About',
        link: '/about',
        icon: <InfoIcon />
    }, {
        name: 'Contact',
        link: '/contact',
        icon: <MessageOutlined />
    },
    {
        name: 'Sell',
        link: "/sell",
        icon: <Sell />
    },
    {
        name: 'Profile',

    },
    {
        name: 'Create Account',
        link: '/account',
        icon: <PersonOutlined />
    }
]