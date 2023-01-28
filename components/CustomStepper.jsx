import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useGlobalProvider } from "../utils/themeContext";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
const CustomeStepper = () => {

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
    return <Box sx={{
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

export default CustomeStepper;