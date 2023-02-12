import { Avatar, Chip, Fab, Grid, Box, Paper, Skeleton } from "@mui/material";
import React, { useMemo, useState } from "react";
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
import { useItemsByStoreQuery, useSingleItemQuery } from "../../../../utils/hooks/useItems";
import More from "../../../../components/More";
import Carousel from "../../../../components/Carousel";
const Category = () => {
    const { id } = useRouter().query
    const { data: food, isLoading } = useSingleItemQuery(id)
    const { data, isLoading: lodaing } = useItemsByStoreQuery(food?.business, food?.items)

    const { colors, mode } = useGlobalProvider()


    return food ? (
        <Box className="bg-primary">
            <Box className="hidden md:flex">
                <Title subtitle={food.name} />
            </Box>
            <Box elevation={1} sx={{
                margin: "-5px 0 !important",
                overflow: 'hidden',

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
                            flexGrow: 1,
                            position: 'relative',


                        }}>
                            <Typography className="">{food.price ? `${food.price} Ksh` : null}</Typography>


                            <Box
                                component="img"
                                sx={{
                                    height: 250,
                                    display: 'block',
                                    width: {
                                        xs: '100%',
                                        md: 'auto'

                                    },

                                    overflow: 'hidden',
                                    width: '100%',
                                    objectFit: 'contain'
                                }}

                                src={food.image}

                            />


                            <Options {...{ food }} />
                        </Box>
                    </Grid>
                    <Grid item p={4}
                        xs={12} sm={12} md={7}


                    >
                        <Typography variant="h5" fontFamily="Nunito" className="mb-2 text-2xl font--bold">Related Items</Typography>
                        <Carousel {...{ data, loading: isLoading }} />

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
