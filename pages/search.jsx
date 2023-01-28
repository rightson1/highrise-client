import { Typography, Box, List, ListItem, Avatar, ListItemIcon, Rating } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Search from "@mui/icons-material/Search";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { InputBase } from "@mui/material";
import Title from "../components/Title";
const Stores = ({ flag }) => {
    const rowContainer = useRef();
    const { colors } = useGlobalProvider(0)
    const [scrollValue, setScrollValue] = useState(0);
    // useEffect(() => {
    //     rowContainer.current.scrollLeft += scrollValue;
    // }, [scrollValue]);

    return <div className="bg-primary">
        <Title title="Stores" subtitle="Search For  Stores" />
        <Box className="flex justify-center align-center gap-5 flex-col pb-7" sx={{ alignItems: 'center' }}>
            <Box className="flex justify-center align-center gap-5" sx={{ alignItems: 'center' }}>
                <Avatar src="/plate.png" />

                <Typography sx={{
                    fontFamily: "Roboto",
                    fontWeight: 500,
                    fontSize: "1.5rem",
                    mt: 1,
                }}  >Stores</Typography>
            </Box>
            <Typography fontWeight="bold" sx={{
                fontFamily: 'Nunito',
                alignSelf: "center",
                textAlign: "center",

                maxWidth: {
                    xs: '90%',

                }
            }}>
                You can search for your favorite stores and restaurants and order your favorite food from them, and you can also search for your favorite products and order them from the stores that sell them.
                click on view store to view store details like distance from you, rating, and order.
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

        </Box>


        <div

            ref={rowContainer}

            className={`w-full flex gap-3  my-4 py-2 scroll-smooth  ${flag
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
                                maxHeight: '140px !important',
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
                                {item.name}
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
                            <Button size="small" sx={{
                                color: `${colors.grey[100]} !important`,
                                backgroundColor: `${colors.red[100]} !important`,
                                border: `2px solid ${colors.red[400]} !important`,
                            }}>View Store</Button>
                        </CardActions>
                    </Card>

                </Box>

            ))}
        </div>;


    </div>;
};
const carts = [

    {
        id: 3,
        name: "Mesh Eats",

    },
    {
        id: 3,
        name: "Rightson Stops",

    },
    {
        id: 3,
        name: "Fish Jamo",

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
Stores.layout = true
export default Stores;
