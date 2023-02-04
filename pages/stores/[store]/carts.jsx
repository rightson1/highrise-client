import { Fab, Grid, Box, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import Title from "../../../components/Title";
import { useGlobalProvider } from "../../../utils/themeContext";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import { useRouter } from "next/router";
import Image from "next/image";
import Cart from "../../../public/empty.png"
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CustomeStepper from "../../../components/CustomStepper";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Delete } from "@mui/icons-material";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Button, IconButton, Badge } from "@mui/material";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';


const Category = () => {
    const [open, setOpen] = React.useState(null);
    const { colors, cart, setCart } = useGlobalProvider()
    const theme = useTheme()
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const router = useRouter()
    const { store } = router.query
    const [storeCart, setStoreCart] = useState(null)

    const [total, setTotal] = useState(0)
    useEffect(() => {
        if (cart) {
            setStoreCart(cart.find((item) => item.id === store))
            setTotal(cart.find((item) => item.id === store)?.items.reduce((total, item) => { return total + item.price }, 0))

        }
    }, [cart])

    const handleClear = () => {
        setCart(cart.filter((item) => item.id !== store))
        setStoreCart(null)
    };


    const handleEdit = (_id, op) => {
        if (op === 0) {
            if (storeCart.items.find((item) => item._id === _id).qty === 1) {
                setCart(cart.map((item) => {
                    if (item.id === store) {
                        return {
                            ...item,
                            items: item.items.filter((item) => item._id !== _id)
                        }
                    }
                    return item
                }))
                if (storeCart.items.length === 1) {
                    handleClear()
                }

                return;


            }
            setCart(cart.map((item) => {
                if (item.id === store) {
                    return {
                        ...item,
                        items: item.items.map((item) => {
                            if (item._id === _id) {
                                return {
                                    ...item,
                                    qty: item.qty - 1,
                                    price: item.price - item.price / item.qty
                                }

                            }
                            return item
                        })
                    }
                }
                return item
            }))
        } else if (op === 1) {
            setCart(cart.map((item) => {
                if (item.id === store) {
                    return {
                        ...item,
                        items: item.items.map((item) => {
                            if (item._id === _id) {
                                return {
                                    ...item,
                                    qty: item.qty + op,
                                    price: item.price + item.price / item.qty
                                }

                            }
                            return item
                        })
                    }
                }
                return item
            }))
        }

    }

    return <>

        <Box className="bg-primary">
            <Title title="Cart" />
            <Paper elevation={1} sx={{
                margin: "20px !important",
                overflow: 'hidden',
                p: '1rem',
                rounded: '10px',
            }}>
                {
                    storeCart ? (
                        <Grid container spacing={0} sx={{ height: '100%' }} gap={2}>

                            <Grid item
                                xs={12} sm={12} md={7}

                                sx={{

                                    height: {
                                        xs: undefined,
                                        md: "70vh"
                                    },

                                }}
                            >
                                <Box justifyContent="flex-start">
                                    <Button sx={{ color: colors.grey[100], background: colors.red[300] + '!important' }}
                                        onClick={handleClear}
                                    >Clear</Button>
                                </Box>
                                <Box className="flex  justify-between items-center">
                                    <Typography my={1} variant="h3" fontWeight="bold" color={colors.orange[500]} fontFamily="Atomic Age">Products</Typography>

                                </Box>
                                <Box
                                    className="w-full overflow-auto block "
                                >
                                    <List sx={{
                                        minWidth: '500px',
                                    }}>
                                        {
                                            storeCart.items.map((item, index) => {
                                                return (<Box key={index}>
                                                    <ListItem className="flex  justify-between">
                                                        <Fab className="z-[3]" onClick={() => setOpen(open === index ? null : index)} size="small" color="primary" aria-label="add" sx={{ background: colors.red[300] + '!important' }}>
                                                            <KeyboardArrowLeft className="-rotate-[90deg]" />
                                                        </Fab>
                                                        <Fab className="z-[3]" size="small" color="primary" aria-label="add" sx={{ background: colors.grey[800] + '!important' }}>
                                                            {item.qty}   <ClearOutlinedIcon className="text-[12px]" />
                                                        </Fab>
                                                        <Typography className="font-bold" fontFamily="Atomic Age">{item.name}</Typography>
                                                        <Fab onClick={() => handleEdit(item._id, 0)} className="z-[3]" size="small" color="primary" aria-label="add" sx={{ background: colors.grey[800] + '!important' }}>
                                                            <RemoveOutlinedIcon className="text-[12px]" />
                                                        </Fab>
                                                        <Fab onClick={() => handleEdit(item._id, 1)} className="z-[3]" size="small" color="primary" aria-label="add" sx={{ background: colors.grey[800] + '!important' }}>
                                                            <AddOutlinedIcon className="text-[12px]" />
                                                        </Fab>
                                                        <Typography className="font-bold" fontFamily="Atomic Age">Ksh{item.price}</Typography>

                                                    </ListItem>

                                                    <Collapse in={open === index} timeout="auto" unmountOnExit>

                                                        <List component="div" disablePadding sx={{ pl: 4, py: 2 }} >
                                                            <Typography color={colors.orange[500]} fontFamily='Atomic Age'>Options</Typography>
                                                            {
                                                                item?.options?.map((option, index) => {
                                                                    return <ListItem className="flex  gap-4" key={index}>
                                                                        <Fab size="small" color="primary" aria-label="add" sx={{ background: colors.grey[800] + '!important' }}>
                                                                            Edit
                                                                        </Fab>
                                                                        <Typography className="font-bold" fontFamily="Atomic Age">{option.optionName}</Typography>

                                                                        <Typography className="font-bold" fontFamily="Atomic Age">KSH. {option.price ? option.price : 0}</Typography>

                                                                    </ListItem>
                                                                })

                                                            }
                                                        </List>
                                                    </Collapse>
                                                </Box>)
                                            })
                                        }
                                        <ListItem className="w-full justify-end">
                                            <Typography className="font-bold" fontFamily="Atomic Age">Total: KSH. {total}</Typography>

                                        </ListItem>
                                    </List>
                                </Box>

                                <Box className="my-5  flex flex-col gap-2">
                                    <Typography className='text-xl ' color={colors.orange[500]} fontFamily="Atomic Age">Add Custom Details</Typography>
                                    <Box
                                        component="textarea"
                                        sx={{
                                            width: "100%",
                                            outline: colors.teal[100],
                                            border: `2px solid ${colors.orange[500]}`,
                                            height: '100px',
                                            '$:focus': {
                                                outline: colors.teal[100],
                                            }
                                        }}
                                        className="resize-none rounded-sm px-2 focus:border-teal-500 focus:border-2 "
                                        placeholder="Enter your elergies/or what you want to add to your order"
                                    />
                                </Box>
                                <Button className="w-full  text-white" sx={{ bgcolor: `${colors.orange[500]} !important` }}>Checkout</Button>
                            </Grid>
                            <Grid item sx={{
                                bgcolor: colors.bg,
                                height: '100%',
                                overflow: "hidden",
                                padding: '1rem !important',
                                display: 'flex',
                                flexDirection: 'column',
                                height: {
                                    xs: undefined,
                                    md: "70vh"
                                }

                            }}
                                md={4}
                                xs={12}
                                sm={12}

                            >
                                {storeCart.items.length > 0 && <CustomeStepper {...{ items: storeCart.items }} />}
                            </Grid>
                        </Grid>

                    ) : (<Box className="flex flex-col justify-center items-center">
                        <Typography fontFamily="Atomic Age" className="text-xl font-bold">Your Cart Is Empty</Typography>
                        <img src="/empty.png" className="h-auto max-h-[300px]" />

                    </Box>)
                }

            </Paper>



        </Box>;
    </>
};

const images = [
    {
        label: 'Chicken Wings',
        imgPath:
            '/img/c4.png',
        quantity: 1,
        price: 200,
    },

    {
        label: 'Red Bull',
        imgPath:
            '/img/d1.png', quantity: 1,
        price: 180,
    },
    {
        label: 'Ice Cream',
        imgPath:
            '/img/i7.png', quantity: 1,
        price: 305,
    },
    {
        label: 'Coca Col',
        imgPath:
            '/img/d8.png',
        quantity: 2,
        price: 220,
    },
];
export default Category;
