import { Grid, Typography, Box, List, ListItem, Avatar, ListItemIcon, IconButton } from "@mui/material";
import React from "react";
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import Search from "@mui/icons-material/Search";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button, InputBase } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
const StoreHero = ({ data: store }) => {
    const { colors } = useGlobalProvider()
    return <Grid container rowGap={5} className="" direction={
        {
            xs: "column-reverse",
            md: "row"
        }
    }>

        <Grid xs={12} md={6} item sx={{
            width: "100%",
            height: "100%",
            display: {
                xs: "none",
                md: "flex"
            },
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            alignItems: "center",
            my: {
                xs: 2,
                md: 5
            }
        }}>
            <Typography sx={{
                fontFamily: "Quicksand",
                fontWeight: 700,

                fontSize: "2rem",
            }}  >{store.name}</Typography>

            <Typography fontWeight="bold" sx={{
                fontFamily: 'Nunito',
                alignSelf: "center",
                textAlign: "center",
                maxWidth: {
                    xs: '80%',
                    md: '350px'
                }
            }}>
                {store.desc},We are always open by {store.opening} to {store.closing},we are located next to {store?.blocks?.map((block, index) => <span className="px-1" key={index}>{block}</span>)}
                {store.delivery ? 'and we deliver to your door step' : 'and we dont deliver'},{store.details}
            </Typography>





        </Grid>
        <Grid xs={0} md={6} item sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",


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
            <img src={store.avatar} alt="" className="max-h-[300px] max-w-[90%] z-[4] rounded-full" />

        </Grid>
    </Grid>;
};

export default StoreHero;
