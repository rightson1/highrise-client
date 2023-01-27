import { Grid, Typography, Box, List, ListItem, Avatar, ListItemIcon, IconButton } from "@mui/material";
import React from "react";
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import Search from "@mui/icons-material/Search";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button, InputBase } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
const StoreHero = () => {
    const { colors } = useGlobalProvider()
    return <Grid container rowGap={5} className="">
        <Grid xs={0} md={6} item sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            display: {
                xs: "none", md: "flex"
            }


        }}>
            <Box component="img" src="/hoho.svg" alt="" className="absolute w-[100px] bottom-0 z-[3]"
                sx={{
                    left: {
                        md: "4rem", sm: "0", xs: -1
                    },
                }}

            />
            <Box component="img" src="/tomato.svg" alt="" className="absolute w-[100px]  z-[3]"
                sx={{
                    right: {
                        md: "4rem", sm: 1, xs: 1
                    },
                    top: {
                        md: 0, sm: -2, xs: -1
                    }

                }}

            />
            <img src="/fork.png" alt="" className="max-h-[300px] max-w-[90%] z-[4]" />

        </Grid>
        <Grid xs={12} md={6} item sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            alignItems: "center",
        }}>
            <Typography sx={{
                fontFamily: "Quicksand",
                fontWeight: 700,

                fontSize: "2rem",
            }}  >Rightson Eats</Typography>

            <Typography fontWeight="bold" sx={{
                fontFamily: 'Nunito',
                alignSelf: "center",
                textAlign: "center",

                maxWidth: {
                    xs: '80%',
                    md: '350px'
                }
            }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur sunt reiciendis nobis ipsum? Sit laborum laborum itaque
                officiis aliquam quasi et.
            </Typography>
            <Box display="flex" bgcolor={colors.looking} className="justify-center items-center p-2 "
                sx={{
                    width: {
                        xs: '90%',
                        sm: '90%',
                        md: '70%'
                    }
                }}
            >
                <Search /><InputBase placeholder="What are you looking for"
                    sx={{
                        width: '100%',
                    }}
                />
                <Button
                    sx={{
                        bgcolor: colors.find + '!important',

                    }}
                ><ArrowRightAltIcon sx={{
                    color: colors.grey[100],
                    width: '5rem'
                }} /></Button>

            </Box>


        </Grid>
    </Grid>;
};

export default StoreHero;
