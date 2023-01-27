import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useRouter } from "next/router";
import Button from '@mui/material/Button';
import { Box, Rating } from "@mui/material";
import Typography from '@mui/material/Typography';
import { useGlobalProvider } from "../utils/themeContext";
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { useEffect, useState, useRef } from "react";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { motion } from "framer-motion";
const Foods = ({ flag }) => {
    const rowContainer = useRef();
    const { colors } = useGlobalProvider(0)
    const [scrollValue, setScrollValue] = useState(0)
    const [items, setItems] = useState([]);
    const router = useRouter()

    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);


    return <>

        <Box
            ref={rowContainer}
            className={`w-full flex gap-3  my-5 py-2 scroll-smooth ${!flag
                ? "overflow-x-scroll scrollbar-none "
                : "overflow-x-hidden flex-wrap justify-center"
                }`}
        >
            {data?.map((item, index) => (

                <Box
                    key={index}

                    onClick={() => router.push(`/store/${12344}`)}
                >
                    <Card className="
         bg-cardOverlay rounded-lg py-2 px-4    hover:drop-shadow-lg flex flex-col items-center justify-evenly relative" >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="80"
                            sx={{
                                maxHeight: {
                                    xs: '100px',
                                    sm: '100px',
                                    md: '100px',
                                },
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
                            <Typography gutterBottom variant="h5" component="div" className="text-center">
                                {item.name}
                            </Typography>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="large" />

                        </CardContent>
                        <Box className="flex flex-wrap justify-center align-center">
                            <Button size="small" sx={{
                                color: `${colors.grey[100]} !important`
                            }}>ksh {1000}</Button>
                            <Button size="small"
                                className="shadow-md"
                                sx={{
                                    color: `${colors.grey[100]} !important`,
                                    backgroundColor: `${colors.red[100]} !important`,

                                }}>Add To Cart</Button>
                        </Box>
                    </Card>

                </Box>

            ))}
        </Box>
    </>
};

export const data = [{
    id: 1,
    name: "Ice Cream",
    decp: "Chocolate & vanilla",
    price: "5.25",
    imageSrc: "/img/i1.png",
},
{
    id: 2,
    name: "Strawberry",
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
    name: "Mixed Fish Kebab",
    decp: "Mixed Fish Kebab",
    price: "5.25",
    imageSrc: "/img/fi1.png",
},
];


export default Foods;
// scrollBehavior: 'smooth',
//     scrollSnapType: 'x mandatory',
//         scrollSnapPointsX: 'repeat(100%)',
//             scrollSnapType: 'x proximity',
//                 scrollSnapStop: 'normal',
//                     scrollSnapCoordinate: '0% 0%',
//                         scrollSnapDestination: '0% 0%'