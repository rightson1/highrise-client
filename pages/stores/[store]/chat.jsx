import { Avatar, Box, Card, CardContent, Divider, Grid, IconButton, InputBase, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGlobalProvider } from "../../../utils/themeContext";
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Drawer from '@mui/material/Drawer';
import Messages from "../../../components/Messages";
import Texts from "../../../components/Texts";


const Chat = () => {
    const { colors } = useGlobalProvider()
    const [open, setOpen] = useState(false)
    return <Box sx={{

    }}>
        {/* <Title title="Messanger" subtitle="Chat App" /> */}
        <Paper sx={{ my: '0px', borderRadius: { xs: '0', sm: '5px', md: '10px' }, background: 'transparent', overflow: 'hidden' }} >

            <Drawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        p: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '.3rem',
                        background: colors.bg,
                    },

                }}
            >
                <Box>   <TextField label="Search Contact" fullWidth /></Box>
                <Messages />

            </Drawer>

            <Grid container spacing={0} sx={{ height: '100%' }}>
                <Grid item sx={{
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'block',
                    },
                    bgcolor: colors.bg,
                    // bgcolor: colors.primary[300],
                    height: '100%',

                    padding: '1rem !important',
                    height: "85vh"

                }}
                    md={4}

                >

                    <Messages />




                </Grid>
                <Grid item
                    xs={12} sm={12} md={8}

                    sx={{
                        background: colors.bg,
                        // background: colors.primary[600],
                        height: "82vh"
                    }}
                >

                    <Box
                        sx={{
                            padding: '.3rem 1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '.3rem',
                            height: '100%',
                        }}>

                        <ListItem disablePadding className="h-[50px]">
                            <IconButton onClick={() => setOpen(true)}>
                                <MenuOutlinedIcon sx={{
                                    display: {
                                        xs: 'block',
                                        sm: 'block',
                                        md: 'none',
                                    }
                                }}

                                />
                            </IconButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Avatar src="/img/avatar.png" />
                                </ListItemIcon>
                                <ListItemText primary="Rightson Tole" secondary="Online" />

                            </ListItemButton>

                        </ListItem>
                        <Divider />

                        <Texts />
                        <Box width="100%" display="flex" className="bg-primary px-1 py-[4px]"
                            component={Paper}
                            elevation={10} sx={{
                                gap: '1rem',
                                alignItems: 'center',
                                pl: '1rem !important',

                            }}>
                            <Box display="flex" gap={1} className="rounded-full" flexGrow={1} sx={{
                                bgcolor: colors.red[200] + ' !important',
                            }}>
                                <IconButton>
                                    <Avatar src="/smile.svg" sx={{
                                        width: '25px',
                                        height: '25px',
                                    }}></Avatar>
                                </IconButton>
                                <Box component="textarea" className={`flex-grow-1 w-[100%]  resize-none bg-transparent] outline-none pt-1`}
                                    bgcolor={colors.red[200] + ' !important'}
                                /> <IconButton>
                                    <Avatar src="/clip.svg" sx={{
                                        width: '25px',
                                        height: '25px',
                                    }}></Avatar>
                                </IconButton>
                            </Box>
                            <Box display="flex" gap={1}>
                                <IconButton>
                                    <Avatar sizes="small" sx={{
                                        width: '30px',
                                        height: '30px',
                                    }} src="/send.svg" />
                                </IconButton>
                            </Box>


                        </Box>
                    </Box>
                </Grid>

            </Grid>

        </Paper>
    </Box>
};

export default Chat;
