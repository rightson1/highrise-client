import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useRouter } from "next/router";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useGlobalProvider } from "../utils/themeContext";
import { useEffect, useState, useRef } from "react";
import { useItemStoreQuery } from "../utils/hooks/useItems";
import Skeleton from "@mui/material/Skeleton";
import { useAuth } from "../utils/authContext";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'
const Carousel = ({ flag, isLoading, data }) => {
    const rowContainer = useRef();

    const { colors } = useGlobalProvider(0)
    const [scrollValue, setScrollValue] = useState(0)

    const router = useRouter()
    const { store } = router.query;

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const maxScrollValue = rowContainer.current.scrollWidth - rowContainer.current.clientWidth;
    //         setScrollValue(previousScrollValue => {
    //             let newScrollValue = previousScrollValue + 30;
    //             if (newScrollValue > maxScrollValue) {
    //                 newScrollValue = 0;
    //             }
    //             return newScrollValue;
    //         });
    //     };

    //     const intervalId = setInterval(handleScroll, 2000);

    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, []);

    useEffect(() => {
        rowContainer.current.scrollLeft = scrollValue;
    }, [scrollValue]);

    return <>
        <div className="hidden md:flex items-center gap-3">

            <motion.div
                onClick={() => setScrollValue(-50)}

                whileTap={{
                    scale: 0.75
                }}


                className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer duration-100 transition-all shadow-lg ease-in-out items-center justify-center flex  ">
                <ChevronLeftOutlinedIcon className="text-lg text-white " />
            </motion.div>
            <motion.div
                onClick={() => setScrollValue(50)}
                whileTap={{

                    scale: 0.75
                }} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer duration-100 transition-all shadow-lg ease-in-out items-center justify-center flex  ">
                <ChevronRightOutlinedIcon className="text-lg text-white " />

            </motion.div>

        </div>
        <Box
            ref={rowContainer}
            className={`w-full flex gap-3  my-5 py-2 scroll-smooth min-h-[200px] ${!flag
                ? "overflow-x-scroll scrollbar-none  "
                : "overflow-x-hidden flex-wrap justify-center"
                }`}
        >
            {data?.length > 0 ? data.map((item, index) => (

                <Box
                    key={index}


                >
                    <Card
                        onClick={() => router.push(`/stores/${item.business}/item/${item._id}`)}
                        className="md:max-w-[300px] min-w-[250px]  h-[250px]
         bg-cardOverlay rounded-lg py-2 px-4  cursor-pointer  hover:drop-shadow-lg flex flex-col items-center justify-evenly relative" >

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
                        }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{
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
                                {item.description}
                            </Typography>
                            <Typography sx={{ color: colors.red[500] }}>ksh {item.price ? item.price :
                                item?.sizes?.length > 0 && item?.sizes?.reduce((prev, curr) => prev.price > curr.price ? prev : curr)?.price}</Typography>
                            <Typography></Typography>
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
                        No items found
                    </Typography>
                </Box>

            }
            <Toaster />
        </Box>
    </>
};



export default Carousel;