import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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
const CustomeStepper = ({ items }) => {

    const { colors, mode } = useGlobalProvider()
    const theme = useTheme()
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = items.length;

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
            <Typography>{items[activeStep]?.name}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
        >
            {items.map((step, index) => (
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

                            src={step?.image}
                            alt={step?.name}
                        />
                    ) : null}
                </div>
            ))}
        </AutoPlaySwipeableViews>

    </Box>
};


export default CustomeStepper;
