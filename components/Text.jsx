import React from "react";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useGlobalProvider } from "../utils/themeContext";

const Text = () => {
    const { colors, mode } = useGlobalProvider()
    return <Box
        sx={{

            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            height: '100%',
        }}>


        <Box display="flex" flexDirection="column" py={2}
            sx={{ overflowY: 'scroll', height: '50vh' }}
        >
            {
                [0, 0, 0].map((item, index) => (<>
                    <ListItem sx={{
                        alignSelf: "self-start",
                        maxWidth: '90%',
                        px: '0 !important'
                    }}

                    >
                        <Box
                            sx={{
                                padding: '.3rem',
                                background: colors.orange[200],
                                borderRadius: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'

                            }}>
                            <Typography
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>
                            <img src="/img/logo.png" className="w-[100px] obje h-[100px]" />
                        </Box>

                    </ListItem>
                    <ListItem sx={{
                        alignSelf: "self-end",
                        maxWidth: '70%',
                        width: 'auto',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        background: colors.yellow[500],
                        borderRadius: '10px',

                    }}>

                        <Typography sx={{
                            textAlign: 'center'
                        }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>

                    </ListItem>
                </>))
            }
        </Box>
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
}

export default Text;
