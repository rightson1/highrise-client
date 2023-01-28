import { Avatar, Chip, Fab, Grid, Box, Paper } from "@mui/material";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Title from "../../../components/Title";
import { useGlobalProvider } from "../../../utils/themeContext";
import Ctabs from "../../../components/Ctabs"
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStep from '@mui/material/MobileStepper';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useTheme } from '@mui/material/styles';
import Options from "../../../components/Options";
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
const Category = () => {
    const [open, setOpen] = React.useState(null);
    const { colors, mode } = useGlobalProvider()
    const theme = useTheme()
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };



    return <>

        <Box className="bg-primary">
            <Title title="Cart" />
            <Paper elevation={1} sx={{
                margin: "20px !important",
                overflow: 'hidden',
                p: '1rem',
                rounded: '10px',
            }}>
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
                            <Button sx={{ color: colors.grey[100], background: colors.red[300] + '!important' }} >Clear</Button>
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
                                    images.map((item, index) => {
                                        return (<Box key={index}>
                                            <ListItem className="flex  justify-between">
                                                <Fab onClick={() => setOpen(open === index ? null : index)} size="small" color="primary" aria-label="add" sx={{ background: colors.red[300] + '!important' }}>
                                                    <KeyboardArrowLeft className="-rotate-[90deg]" />
                                                </Fab>
                                                <Fab size="small" color="primary" aria-label="add" sx={{ background: colors.grey[800] + '!important' }}>
                                                    1   <ClearOutlinedIcon className="text-[12px]" />
                                                </Fab>
                                                <Typography className="font-bold" fontFamily="Atomic Age">Chicken Wings</Typography>
                                                <Fab size="small" color="primary" aria-label="add" sx={{ background: colors.grey[800] + '!important' }}>
                                                    <RemoveOutlinedIcon className="text-[12px]" />
                                                </Fab>
                                                <Fab size="small" color="primary" aria-label="add" sx={{ background: colors.grey[800] + '!important' }}>
                                                    <AddOutlinedIcon className="text-[12px]" />
                                                </Fab>
                                                <Typography className="font-bold" fontFamily="Atomic Age">KSH. 300</Typography>

                                            </ListItem>

                                            <Collapse in={open === index} timeout="auto" unmountOnExit>

                                                <List component="div" disablePadding sx={{ pl: 4, py: 2 }} >
                                                    <Typography color={colors.orange[500]} fontFamily='Atomic Age'>Options</Typography>
                                                    <ListItem className="flex  gap-4">
                                                        <Fab size="small" color="primary" aria-label="add" sx={{ background: colors.grey[800] + '!important' }}>
                                                            <DeleteOutlineIcon className="text-[12px]" />
                                                        </Fab>
                                                        <Typography className="font-bold" fontFamily="Atomic Age">Chicken Wings</Typography>

                                                        <Typography className="font-bold" fontFamily="Atomic Age">KSH. 300</Typography>

                                                    </ListItem>
                                                </List>
                                            </Collapse>
                                        </Box>)
                                    })
                                }
                                <ListItem className="w-full justify-end">
                                    <Typography className="font-bold" fontFamily="Atomic Age">Total: KSH. 800</Typography>

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
                        <CustomeStepper />
                    </Grid>
                </Grid>


            </Paper>



        </Box >;
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
