import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Texts = () => {
    const { colors } = useGlobalProvider()
    return <Box display="flex" flexDirection="column" py={2}
        sx={{ overflowY: 'auto', height: 'auto' }}
        className="bg-primary"
        component={Paper}
        elevation={10}
    >
        {
            [0, 0, 0].map((item, index) => (<>
                <ListItem sx={{
                    alignSelf: "self-start",
                    maxWidth: '80%',
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
                    maxWidth: '80%',
                    width: 'auto',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    background: colors.looking,
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
};

export default Texts;
