import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useRouter } from "next/router";
import Button from '@mui/material/Button';
import { Box, Rating } from "@mui/material";
import Typography from '@mui/material/Typography';
import { useGlobalProvider } from "../utils/themeContext";
import { useEffect, useState, useRef } from "react";
import { useItemStoreQuery } from "../utils/hooks/useItems";
import Skeleton from "@mui/material/Skeleton";
const Foods = ({ flag, filter }) => {
    const rowContainer = useRef();
    const { colors } = useGlobalProvider(0)
    const [scrollValue, setScrollValue] = useState(0)
    const router = useRouter()
    const { store } = router.query;
    const { data } = useItemStoreQuery({ id: store, filter })

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
            {data ? data.map((item, index) => (

                <Box
                    key={index}


                >
                    <Card className="md:max-w-[300px] min-w-[250px] 
         bg-cardOverlay rounded-lg py-2 px-4    hover:drop-shadow-sm flex flex-col items-center justify-evenly relative" >
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
                                {item.name}
                            </Typography>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="large" />
                            <Typography gutterBottom sx={{
                                fontFamily: 'Nunito',
                                fontWeight: 700,
                                fontSize: '.8rem',
                                textAlign: 'center'
                            }}>
                                {item.description}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{
                            display: 'flex',
                            justifyContent: "space-between",
                            width: '100%'
                        }}>
                            <Button size="small" sx={{
                                color: `${colors.grey[100]} !important`
                            }}>{item.prices}</Button>
                            <Button size="small" className="shadow-md hover:shadow-inner"
                                onClick={() => router.push(`/stores/${store}/item/${item._id}`)}
                                sx={{
                                    color: `${colors.grey[100]} !important`, backgroundColor: `${colors.red[100]} !important`
                                    , '&:hover': {
                                        backgroundColor: `${colors.red[200]} !important`
                                    }

                                }}>Add To Cart</Button>
                        </CardActions>
                    </Card>

                </Box>

            )) : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                console.log(item)
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
        </Box>
    </>
};



export default Foods;