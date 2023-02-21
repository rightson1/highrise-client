import { Typography, Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useGlobalProvider } from "../utils/themeContext";
import { useBusinessQuery } from "../utils/hooks/useBusiness";
import { useRouter } from "next/router";
import GasCats from "./GasCats";
import { useGasItemsQuery } from "../utils/hooks/useItems";
import Skeleton from "@mui/material/Skeleton";
const GasCards = ({ flag }) => {
    const rowContainer = useRef();
    const router = useRouter();
    const { colors, isMobile } = useGlobalProvider(0)
    const [scrollValue, setScrollValue] = useState(0);
    const [filtered, setFiltered] = useState([])
    const [kg, setKg] = useState(6);
    const [category, setCategory] = useState(null)
    const { data, isLoading } = useGasItemsQuery(kg)
    const { data: gasBusinesses, error } = useBusinessQuery("gas");

    useEffect(() => {
        if (!data) return setFiltered([])
        if (!category) {
            const filtered = data.filter(item => item.kg === kg);
            return setFiltered(filtered)
        }
        else {
            const filtered = data.filter(item => item.kg === kg && item.category === category);
            return setFiltered(filtered)
        }

    }, [data, kg, category])

    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);

    return <Box className=" ">
        <GasCats {...{ setKg, kg, category, setCategory }} />
        <div

            ref={rowContainer}

            className={`w-full flex gap-3  my-4 py-2 scroll-smooth   ${isMobile
                ? "overflow-x-scroll scrollbar-none "
                : "overflow-x-hidden flex-wrap justify-center"
                }`}
        >


            {filtered?.length > 0 ? filtered?.map((item, index) => {
                const business = gasBusinesses?.find(business => business._id === item.business)

                return (


                    <Box
                        key={index}
                        onClick={() => router.push(`/gas/products/${item._id}`)}


                    >
                        <Card
                            className=" w-[250px]   h-[250px] 
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

                                image={item.image}
                            />
                            <CardContent sx={{
                                display: 'flex',
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexDirection: 'column'
                            }}>  <Typography gutterBottom variant="h5" component="div" sx={{
                                fontFamily: 'Nunito',
                                fontWeight: 700,
                                fontSize: '1.2rem',
                            }}>
                                    {item.name}
                                </Typography>

                                <Typography gutterBottom sx={{
                                    fontFamily: 'Nunito',
                                    fontWeight: 700,
                                    fontSize: '.8rem',
                                    textAlign: 'center'
                                }}>

                                    Supplier: {business?.name}
                                </Typography>
                                <Typography sx={{ color: colors.red[500] }}>
                                    {item.price} Ksh
                                </Typography>

                            </CardContent>

                        </Card>

                    </Box>

                )

            })
                : isLoading ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {

                    return (
                        <Box
                            key={index}
                            className="md:max-w-[300px] min-w-[250px]
            bg-cardOverlay rounded-lg py-2 px-4    hover:drop-shadow-lg flex flex-col items-center justify-evenly relative" >
                            <Skeleton variant="rectangular" width={210} height={118} />
                            <Skeleton variant="text" width={210} />
                            <Skeleton variant="text" width={210} />
                            <Skeleton variant="text" width={210} />
                        </Box>
                    )
                }) :
                    <Box
                        className="md:max-w-[300px] min-w-[250px] h-[250px]
            bg-cardOverlay rounded-lg py-2 px-4    hover:drop-shadow-lg flex flex-col items-center justify-evenly relative" >
                        <Typography variant="h5" sx={{
                            fontFamily: 'Nunito',
                            fontWeight: 700,
                            fontSize: '1.2rem',
                        }}>
                            No items found
                        </Typography>
                    </Box>
            }
        </div>

    </Box>;
};
const data = [
    {
        id: 1,
        name: "Mesh Eats",
        open: true,
        price: "5.25",
        avatar: "/img/gas1.jpg",
    },
    {
        id: 2,
        name: "Rightson Foods",
        decp: "",
        price: "10.25",
        open: true,
        avatar: "/img/gas2.jpg",
    },
    {
        id: 3,
        name: "Chicken Kebab",
        open: true,
        price: "8.25",
        avatar: "/img/gas3.jpg",
    },
    {
        id: 4,
        name: "Fish Highrise Eats",
        open: true,
        price: "5.25",
        avatar: "/img/gas4.jpg",
    },
    {
        id: 4,
        name: "Fish Highrise Eats",
        open: true,
        price: "5.25",
        avatar: "/img/gas5.jpg",
    },
    {
        id: 4,
        name: "Fish Highrise Eats",
        open: true,
        price: "5.25",
        avatar: "/img/gas6.jpg",
    },
    {
        id: 4,
        name: "Fish Highrise Eats",
        open: true,
        price: "5.25",
        avatar: "/img/gas7.jpg",
    },
];

export default GasCards;
