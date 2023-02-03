import { Typography, Box, List, ListItem, Avatar, ListItemIcon, Rating } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useRouter } from "next/router";
import { useGlobalProvider } from "../utils/themeContext";
const Categories = ({ flag, scrollValue, categories }) => {
    const rowContainer = useRef();
    const { colors } = useGlobalProvider(0)
    const router = useRouter()
    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);
    const mapping = () => categories ? categories : carts

    return <Box className="row py-12">
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
            }}  >Categories</Typography>

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
                <div

                    ref={rowContainer}

                    className={`w-full flex gap-3  my-4 py-2 scroll-smooth  ${!flag
                        ? "overflow-x-scroll scrollbar-none "
                        : "overflow-x-hidden flex-wrap justify-center"
                        }`}
                >


                    {data?.map((item, index) => (

                        <Box
                            key={index}


                        >
                            <Card className="md:max-w-[300px] min-w-[250px] 
         bg-cardOverlay rounded-lg py-2 px-4    hover:drop-shadow-lg flex flex-col items-center justify-evenly relative" >
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="100"
                                    sx={{
                                        maxHeight: '130px !important',
                                        objectFit: 'contain !important',
                                        p: 1,

                                    }}

                                    image={item.imageSrc}
                                />
                                <CardContent sx={{
                                    display: 'flex',
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    flexDirection: 'column'
                                }}>
                                    <Typography gutterBottom variant="h5" component="div" sx={{
                                        fontFamily: 'Nunito',
                                        fontWeight: 700,
                                        fontSize: '1.2rem',
                                    }}>
                                        {item.decp}
                                    </Typography>
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="large" />
                                    <Typography gutterBottom sx={{
                                        fontFamily: 'Nunito',
                                        fontWeight: 700,
                                        fontSize: '.8rem',
                                        textAlign: 'center'
                                    }}>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum.
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{
                                    display: 'flex',
                                    justifyContent: "space-between",
                                    width: '100%'
                                }}>
                                    <Button size="small" sx={{
                                        color: `${colors.grey[100]} !important`
                                    }}>ksh {1000}</Button>
                                    <Button size="small"
                                        onClick={() => router.push(`/stores/${item.id}/item/${item.id}`)}
                                        sx={{
                                            color: `${colors.grey[100]} !important`,
                                            backgroundColor: `${colors.red[100]} !important`,
                                            border: `2px solid ${colors.red[400]} !important`,

                                        }}>View</Button>
                                </CardActions>
                            </Card>

                        </Box>

                    ))}
                </div>
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
    // {
    //     id: 3,
    //     name: "Mesh Eats",

    // },
    // {
    //     id: 3,
    //     name: "Rightson Stops",

    // },
    // {
    //     id: 3,
    //     name: "Fish Jamo",

    // },
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
        decp: "Straw Berry",
        price: "10.25",
        imageSrc: "/img/f1.png",
    },
    {
        id: 3,
        name: "Chicken Kebab",
        decp: "Chicken",
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

export default Categories;
