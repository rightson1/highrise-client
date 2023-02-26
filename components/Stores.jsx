import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useEffect, useRef, useState } from "react";
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useGlobalProvider } from "../utils/themeContext";
import { useBusinessQuery } from "../utils/hooks/useBusiness";
import { useRouter } from "next/router";
import Skeleton from "@mui/material/Skeleton";
const Stores = ({ flag }) => {
    const rowContainer = useRef();
    const router = useRouter();
    const { colors, isMobile } = useGlobalProvider(0)
    const [scrollValue, setScrollValue] = useState(0);
    const { data, isLoading } = useBusinessQuery("foods");



    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);

    return <Box className=" py-12">

        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto pl-5">
            All Hotels

        </p>
        <div

            ref={rowContainer}

            className={`w-full flex gap-3  my-4 py-2 scroll-smooth  ${isMobile
                ? "overflow-x-scroll scrollbar-none "
                : "overflow-x-hidden flex-wrap justify-center"
                }`}
        >


            {data ? data.map((item, index) => (

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

            )) : isLoading ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {

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
                    className="md:max-w-[300px] min-w-[250px]
            bg-cardOverlay rounded-lg py-2 px-4    hover:drop-shadow-lg flex flex-col items-center justify-evenly relative" >
                    <Typography variant="h5" sx={{
                        fontFamily: 'Nunito',
                        fontWeight: 700,
                        fontSize: '1.2rem',
                    }}>
                        No Hotels found
                    </Typography>
                </Box>



            }
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
