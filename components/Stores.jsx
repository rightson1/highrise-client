import { Typography, Box, List, ListItem, Avatar, ListItemIcon, Rating } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useGlobalProvider } from "../utils/themeContext";
import { useBusinessQuery } from "../utils/hooks/useBusiness";
import { useRouter } from "next/router";
const Stores = ({ flag }) => {
    const rowContainer = useRef();
    const router = useRouter();
    const { colors } = useGlobalProvider(0)
    const [scrollValue, setScrollValue] = useState(0);
    const { data, isLoading } = useBusinessQuery();



    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);

    return <Box className=" py-12">
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
            }}  >Stores</Typography>

        </ListItem>

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
                    <Card
                        onClick={() => router.push(`/stores/${item._id}`)}
                        className="md:max-w-[300px] min-w-[250px]  h-[250px]
         bg-cardOverlay rounded-lg py-2 px-4 cursor-pointer   hover:drop-shadow-lg flex flex-col items-center justify-evenly relative" >

                        <CardMedia
                            component="img"
                            alt={item.name}
                            height="100"
                            sx={{
                                maxHeight: '140px !important',
                                objectFit: 'contain !important',
                                p: 1,

                            }}

                            image={item.avatar}
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
                            <Button size="small" sx={{
                                color: `${colors.grey[100]} !important`
                            }}>{item.open ? 'Open' : 'Closed'}</Button>

                        </CardContent>

                    </Card>

                </Box>

            ))}
        </div>;

    </Box>;
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

export default Stores;
