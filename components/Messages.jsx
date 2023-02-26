import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';;
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Messages = () => {
    const { colors } = useGlobalProvider()
    return <>
        <Box
            sx={{
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                height: '100%',
            }}
        >
            <Box
                classname="flex justify-between "
                sx={{ bgcolor: colors.red[200], padding: '.5rem', borderRadius: '5px' }}
            >
                <SearchOutlinedIcon />
                <InputBase placeholder="search for message" />

            </Box>
            <List sx={{ overflowY: 'scroll', height: 'auto' }} elevation={10} component={Paper} className="bg-primary">
                {
                    [1, 2, 3, 4, 5, 6, 1, 3, 3, 3, 3, 2, 2, 3].map((item, index) => (<ListItem key={index} disablePadding>
                        <ListItemButton>

                            <ListItemText primary="Rightson Tole" secondary="I need..." />
                            <Typography>{index + 10 / 2}:00</Typography>
                            <IconButton>
                                <DeleteOutlineOutlinedIcon />
                            </IconButton>

                        </ListItemButton>

                    </ListItem>))
                }

            </List>
        </Box>
    </>

};

export default Messages;
