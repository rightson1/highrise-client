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
const Foods = ({ flag, categories }) => {
    const rowContainer = useRef();
    const { colors } = useGlobalProvider(0)
    const [scrollValue, setScrollValue] = useState(0)
    const [items, setItems] = useState([]);
    const router = useRouter()
    const { store } = router.query;

    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);


    return <>

        <Box
            ref={rowContainer}
            className={`w-full flex gap-3  my-5 py-2 scroll-smooth ${!flag
                ? "overflow-x-scroll scrollbar-none  "
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
                            <Button size="small" className="shadow-md hover:shadow-inner"
                                onClick={() => router.push(`/stores/${store}/item/${item.id}`)}
                                sx={{ color: `${colors.grey[100]} !important`, backgroundColor: `${colors.red[100]} !important` }}>Add To Cart</Button>
                        </CardActions>
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