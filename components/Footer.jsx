import { Box, Button, Grid, List, ListItem, ListItemButton, Typography } from "@mui/material";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
const Footer = () => {
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true);
        emailjs
            .sendForm(
                "service_0ady6pa",
                "template_ver6v3e",
                e.target,
                "5kOjUoERLzqz_vj0O"
            )
            .then((res) => {
                e.target.reset();
                setLoading(false);
                toast.success('Message sent, will get back to you as soon as possible')
            })
            .catch((e) => {
                toast.error('Sorry, there was an error')

                setLoading(false);

            });
        e.target.reset();

    }
    const { colors } = useGlobalProvider()
    return <Grid
        sx={{
            pb: {
                xs: 8,
                sm: 8,
                md: 2,
            }
        }}

        container bgcolor={colors.grey[100]}>
        <Grid item xs={12} md={4}>
            <List

            >
                <ListItem
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        textAlign="center"

                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'Atomic Age',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: colors.grey[900],
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
                    </Typography>

                </ListItem>
            </List>
        </Grid>
        <Grid item xs={12} md={4}>
            <List>
                <ListItem
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        textAlign="center"

                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'Atomic Age',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: colors.grey[900],
                            textDecoration: 'none',
                            fontSize: {
                                xs: '1.3rem',
                                md: '1.5rem'
                            },

                        }}
                    >
                        Info
                    </Typography>
                    <List

                    >
                        {pages.map((item, index) => {
                            return (
                                <ListItemButton key={index}
                                    onClick={() => router.push(item.link)}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',

                                    }}
                                >
                                    <Typography

                                        sx={{
                                            mr: 2,
                                            display: { xs: 'flex', md: 'flex' },
                                            fontFamily: 'Source Sans Pro',
                                            fontWeight: 700,
                                            letterSpacing: '.3rem',

                                            color: colors.grey[900],
                                            textDecoration: 'none',
                                            "&:hover": {
                                                color: colors.grey[700],
                                                textDecoration: 'underline',

                                            }

                                        }}

                                    >{item.name}</Typography>
                                </ListItemButton>
                            )
                        })}
                    </List>

                </ListItem>
            </List>
        </Grid>
        <Grid item xs={12} md={4} component="form" onSubmit={handleSubmit}>
            <List>
                <ListItem
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        textAlign="center"

                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'Atomic Age',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: colors.grey[900],
                            textDecoration: 'none',
                            fontSize: {
                                xs: '1.3rem',
                                md: '1.5rem'
                            },

                        }}
                    >
                        Send Us A Message

                    </Typography>
                    <List


                        sx={{
                            width: {
                                xs: '82%',
                                md: '90%'

                            }
                        }}

                    >
                        <ListItem
                            disablePadding

                            className="py-3 my-2"

                        >
                            <input type="text" required name="name" className="bg-transparent border-b-[rgba(255,255,255,.6)] border-b-[1px] w-[100%] outline-none" placeholder="Enter Your Name" />
                        </ListItem>
                        <ListItem
                            disablePadding

                            className="py-3 my-2"

                        >
                            <input type="email" required name="email" className="bg-transparent border-b-[rgba(255,255,255,.6)] border-b-[1px] w-[100%] outline-none focus:bg-transparent" placeholder="Enter Your Email" />
                        </ListItem>
                        <ListItem
                            disablePadding

                            className="my-2"

                        >
                            <textarea className="bg-transparent resize-none border-b-[rgba(255,255,255,.6)] border-b-[1px] w-[100%] outline-none text-white" required name="message" placeholder="Enter Your Message" />
                        </ListItem>


                    </List>
                    <Button type="submit" sx={{
                        width: {
                            xs: '82%',
                            md: '90%'

                        },
                        bgcolor: colors.red[500] + " !important",
                        color: colors.grey[100] + " !important",
                    }}>{loading ? 'Loading...' : 'Send'}</Button>
                </ListItem>
            </List>
        </Grid>
        <Toaster />
    </Grid>;
};

const list = ['Register Business', 'Contact us', 'About us', 'Developers']
const pages = [
    {
        name: 'Register Business',
        link: 'https://highrise-blond.vercel.app/'
    }, {
        name: 'About us',
        link: '/about',

    }, {
        name: 'Developers',
        link: 'https://rightson1.github.io/portfolio/'
    }
]
export default Footer;
