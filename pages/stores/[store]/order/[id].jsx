import { Avatar, Chip, Fab, Grid, ListItem, ListItemIcon, ListItemText, Box, Paper } from "@mui/material";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Title from "../../../../components/Title";
import { useGlobalProvider } from "../../../../utils/themeContext";
import Ctabs from "../../../../components/Ctabs"
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';

const Category = () => {

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



    return <Box className="bg-primary">
        <Title title="Orders" subtitle="Pending" />
        <Paper elevation={10} sx={{
            margin: "20px !important",
            overflow: 'hidden',
            p: '1rem',
            rounded: '10px',
        }}>
            <Grid container spacing={0} sx={{ height: '100%' }} gap={2}>
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
                    <Box sx={{
                        flexGrow: 1.


                    }}>
                        <Paper
                            square
                            elevation={0}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: 50,
                                pl: 2,
                                bgcolor: 'transparent',

                            }}
                        >
                            <Typography>{images[activeStep].label}</Typography>
                        </Paper>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {images.map((step, index) => (
                                <div key={index}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                            component="img"
                                            sx={{
                                                height: 255,
                                                display: 'block',

                                                overflow: 'hidden',
                                                width: '100%',
                                                objectFit: 'contain'
                                            }}

                                            src={step.imgPath}
                                            alt={step.label}
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            sx={{
                                bgcolor: colors.orange[400],
                                "& .MuiMobileStepper-dotActive ": {
                                    bgcolor: colors.orange[100] + '!important',

                                }
                            }}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    sx={{ color: colors.orange[100] }}
                                    disabled={activeStep === maxSteps - 1}
                                >
                                    Next
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button
                                    sx={{ color: colors.orange[100] }}
                                    size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                    Back
                                </Button>
                            }
                        />
                    </Box>
                </Grid>
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
                        <Button sx={{ color: colors.grey[100], background: colors.red[300] + '!important' }} >Cancel</Button>
                        {/* <Button sx={{ color: colors.grey[100] }} background={colors.teal[300]}>Change</Button> */}
                    </Box>
                    <Box className="flex  justify-between items-center">
                        <Typography my={1} variant="h3" fontWeight="bold" color={colors.orange[500]}>Rightson Kirigha</Typography>
                        <Typography>scroll-</Typography>
                    </Box>
                    <TableContainer component={Paper} className="bg-primary " elevation={0} sx={{
                        boxShadow: 'inset -3px 0 3px rgba(0,0,0,0.4)',
                    }}>
                        <Table sx={{ minWidth: 400 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="h6">
                                            Name
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h6">
                                            Quantity
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h6">
                                            Price
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h6">
                                            Options
                                        </Typography>
                                    </TableCell>


                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {images.map((product, index) => (
                                    <TableRow key={index}

                                    >
                                        <TableCell>
                                            <Typography
                                                sx={{
                                                    fontSize: "15px",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                {product.label}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                sx={{
                                                    fontSize: "15px",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                {product.quantity}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                sx={{
                                                    fontSize: "15px",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                {product.price}
                                            </Typography>
                                        </TableCell>

                                        <TableCell>
                                            <Chip
                                                onClick={() => router.push('/order/12344')}
                                                sx={{
                                                    px: 1,
                                                    backgroundColor: colors.yellow[500],
                                                    color: "#fff",
                                                }}
                                                size="medium"
                                                label="View"
                                            ></Chip>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>

                        </Table>
                        {/* <TableRow>
                            <TableCell></TableCell>
                            <TableCell colSpan={2}>Click View To Order details</TableCell>
                        </TableRow> */}
                    </TableContainer>

                </Grid>

            </Grid>


        </Paper>
        <Paper
            elevation={10} sx={{
                margin: "20px !important",
                overflow: 'hidden',
                p: '1rem',
                rounded: '10px',
            }}
        >

            <Ctabs item={true} />

        </Paper>


    </Box>;
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
Category.layout = true;
export default Category;
