import { Typography, Box, List, ListItem, Avatar, ListItemIcon, Rating } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useRouter } from "next/router";
import { useGlobalProvider } from "../utils/themeContext";
import Foods from "./Foods";
const More = ({ flag, scrollValue, categories }) => {
    const rowContainer = useRef();
    const { colors } = useGlobalProvider(0)
    const router = useRouter()

    const mapping = () => categories ? categories : carts

    return <Box className="py-12">
        <ListItem sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <ListItemIcon>
                <Avatar src="/plate.png" sx={{
                    width: "3rem",
                    height: "3rem"
                }} />
            </ListItemIcon>
            <Typography sx={{
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: "1.5rem",
            }}  >More</Typography>

        </ListItem>
        {mapping().map((cart, index) => {
            return <Box key={index}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    px: 2,

                }}>
                    <Button sx={{
                        bgcolor: colors.red[200] + " !important",
                        color: colors.grey[100] + " !important",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 1,
                    }}>{cart.name}
                        <Box component="img" src="/right.svg" sx={{
                            width: "1.4rem",
                            height: "1.4rem"
                        }} />
                    </Button>
                </Box>
                <Foods />
            </Box>
        })}
    </Box>;
};
const carts = [

    {
        id: 2,
        name: "On Discount",

    },
    {
        id: 3,
        name: "Top Rated",

    },
]
const data = [
    {
        id: 1,
        name: "Mesh Eats",
        decp: "Chocolate & vanilla",
        price: "5.25",
        imageSrc: "/img/i1.png",
    },
    {
        id: 2,
        name: "Rightson Foods",
        decp: "",
        price: "10.25",
        imageSrc: "/img/f1.png",
    },
    {
        id: 3,
        name: "Chicken Kebab",
        decp: "Stop Eats",
        price: "8.25",
        imageSrc: "/img/c3.png",
    },
    {
        id: 4,
        name: "Fish Highrise Eats",
        decp: "Mixed Fish Kebab",
        price: "5.25",
        imageSrc: "/img/fi1.png",
    },
];

export default More;
