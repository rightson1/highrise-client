import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { useSingleBusinessQuery } from "../utils/hooks/useBusiness";
const FoooterBusiness = () => {
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const { store } = router.query
    const { data: business } = useSingleBusinessQuery(store)

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

    const pages = [
        {
            name: 'Home',
            link: `/stores/${store}`
        }, {
            name: 'About us',
            link: `/stores/${store}/about`,

        }, {
            name: 'Contact Us',
            link: `/stores/${store}/contact`
        }
    ]
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
                        {business?.name}
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
                        Links
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
                        Leave A Review

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

                            className="my-2"

                        >
                            <textarea className="bg-transparent resize-none border-b-[rgba(255,255,255,.6)] border-b-[1px] w-[100%] outline-none text-white" required name="message" placeholder="Enter Your Review" />
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


export default FoooterBusiness;
