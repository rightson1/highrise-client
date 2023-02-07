import { Avatar, Chip, Fab, Grid, Box, Paper, Skeleton } from "@mui/material";
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
import { useTheme } from '@mui/material/styles';
import Options from "../../../../components/Options";
import { useRouter } from "next/router";
import { useSingleItemQuery } from "../../../../utils/hooks/useItems";
import More from "../../../../components/More";
const Category = () => {
    const { id } = useRouter().query
    const { data: food, isLoading } = useSingleItemQuery(id)

    const { colors, mode } = useGlobalProvider()
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    return food ? (
        <Box className="bg-primary">
            <Title subtitle={food.name} />
            <Box elevation={1} sx={{
                margin: "-5px 20px !important",
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
                            md: "auto"
                        }

                    }}
                        md={4}
                        xs={12}
                        sm={12}

                    >
                        <Box sx={{
                            flexGrow: 1.


                        }}>
                            <Typography>{food.price ? `${food.price} Ksh` : null}</Typography>
                            <AutoPlaySwipeableViews className="">

                                <Box
                                    component="img"
                                    sx={{
                                        height: 185,
                                        display: 'block',

                                        overflow: 'hidden',
                                        width: '100%',
                                        objectFit: 'contain'
                                    }}

                                    src={food.image}

                                />

                            </AutoPlaySwipeableViews>

                        </Box>
                    </Grid>
                    <Grid item
                        xs={12} sm={12} md={7}

                        sx={{

                            height: {
                                xs: undefined,
                                md: "auto"
                            },

                        }}
                    >
                        <Box className="flex  justify-between items-center">
                        </Box>

                        <Options {...{ food }} />
                    </Grid>

                </Grid>


            </Box>


            {/* <More /> */}
        </Box>
    ) : (
        <Box className="flex gap-3 flex-col">
            <Skeleton variant="rectangular" width={"100vw"} height={200} />
            <Skeleton variant="rectangular" width={'100vw'} height={200} />
        </Box>
    )
};

export default Category;
