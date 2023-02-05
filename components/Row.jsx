import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useRouter } from "next/router";
import Button from '@mui/material/Button';
import { Box, Rating, Skeleton } from "@mui/material";
import Typography from '@mui/material/Typography';
import { useGlobalProvider } from "../utils/themeContext";
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { useEffect, useState, useRef } from "react";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { motion } from "framer-motion";
import { useBusinessQuery } from "../utils/hooks/useBusiness";
import { useItemQuery } from "../utils/hooks/useItems";
const RowContainer = ({ flag, filter }) => {
    const rowContainer = useRef();
    const { colors } = useGlobalProvider(0)
    const [scrollValue, setScrollValue] = useState(0);
    const { data, isLoading } = useItemQuery(filter)
    const { data: businesses } = useBusinessQuery();
    const router = useRouter()
    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);


    return <>
        <Box className="w-full justify-between items-center flex sm:px-5 md:px-6">
            <Typography sx={{ visibility: 'hidden' }} className="invisible">
                Our  Categories
            </Typography>
            <div className="hidden md:flex items-center gap-3">

                <motion.div
                    onClick={() => setScrollValue(-200)}

                    whileTap={{
                        scale: 0.75
                    }}


                    className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer duration-100 transition-all shadow-lg ease-in-out items-center justify-center flex  ">
                    <ChevronLeftOutlinedIcon className="text-lg text-white " />
                </motion.div>
                <motion.div
                    onClick={() => setScrollValue(200)}
                    whileTap={{

                        scale: 0.75
                    }} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer duration-100 transition-all shadow-lg ease-in-out items-center justify-center flex  ">
                    <ChevronRightOutlinedIcon className="text-lg text-white " />

                </motion.div>

            </div>
            <ArrowRightAltOutlinedIcon className=" flex md:hidden text-2xl text-orange-400" />
        </Box>
        <div
            ref={rowContainer}

            className={`w-full flex gap-3  my-5 py-2 scroll-smooth px-3  ${!flag
                ? "overflow-x-scroll scrollbar-none "
                : "overflow-x-hidden flex-wrap justify-center"
                }`}
        >
            {data?.length ? data?.map((item, index) => {
                const business = businesses?.find(business => business._id === item.business)

                return (

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
                                    {business?.name}
                                </Typography>
                                {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="large" /> */}
                                {/* <Typography gutterBottom sx={{
                                    fontFamily: 'Nunito',
                                    fontWeight: 700,
                                    fontSize: '.8rem',
                                    textAlign: 'center'
                                }}>
                                    Close To {business?.blocks.map((block, index) => <Typography sx={{
                                        fontFamily: 'Atomic Age',
                                        fontWeight: 700,
                                        fontSize: '.8rem',
                                        textAlign: 'center'
                                    }} component="span" key={index}>{block} , </Typography>)}
                                </Typography> */}
                                <Typography gutterBottom sx={{
                                    fontFamily: 'Nunito',
                                    fontWeight: 700,
                                    fontSize: '.8rem',
                                    textAlign: 'center'
                                }}>
                                    Delivery {business?.delivery ? 'Free' : 'Not Available'}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{
                                display: 'flex',
                                justifyContent: "space-between",
                                width: '100%'
                            }}>
                                <Button size="small" sx={{
                                    color: `${colors.grey[100]} !important`
                                }}>ksh {item.price}</Button>
                                <Button size="small"
                                    onClick={() => router.push(`/stores/${business?._id}`)}
                                    sx={{
                                        color: `${colors.grey[100]} !important`,
                                        backgroundColor: `${colors.red[100]} !important`,
                                        border: `2px solid ${colors.red[400]} !important`,

                                    }}>View Store</Button>
                            </CardActions>
                        </Card>

                    </Box>

                )
            }) : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {

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
            })
            }

        </div>
    </>
};




export default RowContainer;
