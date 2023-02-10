import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const AboutHero = () => {
    return <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{
        }}>
            <Typography variant="h3" fontFamily="Nunito" className="font-semibold" pl={{
                xs: 2,
                md: 15,
            }}>Foodie  is</Typography>
            <Box my={3}>
                <Typography variant="h1" fontFamily="Gloria Hallelujah" className="font-semibold " pl={{
                    xs: 2,
                    md: 15,
                }}>All<br></br> About Food</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={6} className="flex " sx={{
            ml: {
                xs: 0,
                md: -10,
            },
            justifyContent: {
                xs: 'flex-end',
                md: 'flex-start'
            }

        }}>
            <Box className="bg-[#FB6764] rec-1 relative overflow-visible" sx={{
                height: {
                    xs: '35vh',
                    md: '50vh',
                },
                width: {
                    xs: '70%',
                    md: '150%',
                },
                mt: {
                    xs: -4,
                    md: 0

                }
            }}>
                <Box className="z-10 absolute w-[120%] h-full object-cover opacity-80"
                    sx={{
                        transform: {
                            xs: 'translateX(-10%)',

                        },
                        left: {
                            xs: -10,
                        },
                        width: {
                            xs: '80vw',
                            md: '100%',
                        }
                    }}
                    component="img"
                    src="/img/donuts.png"
                />

            </Box>
        </Grid>

    </Grid>
};

export default AboutHero;
