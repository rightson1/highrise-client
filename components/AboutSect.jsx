import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const AboutSec = () => {
    return <Grid container spacing={2} mt={13}  >
        <Grid item xs={12} md={6} className="bg-[#FFD5B6] h-[50vh] flex justify-center items-center ">
            <Box className='w-3/4 h-3/4 bg-white flex justify-center items-center flex-col'>
                <Typography variant="h4" className="text-black" >10+</Typography>
                <Typography variant="h4" className="text-black" >restrants</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={6} className="flex justify-center items-center" >
            <Typography
                px={4}
                fontFamily="Nunito" fontSize={{
                    xs: '25px',
                    md: '30px',

                }}
            >
                At Foodie, we take our food seriously. And by
                {` "seriously,"`} we mean we love it so much, we want to hug it. Thats
                why we only work with the creme de la creme of restaurants and chefs
                who are just as passionate about food as we are.
            </Typography>

        </Grid>

    </Grid>
};

export default AboutSec;
