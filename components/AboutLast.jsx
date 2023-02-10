import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const AboutLast = () => {
    return <Grid container spacing={2} mt={1} direction={{
        xs: 'column-reverse',
        md: 'row'
    }} >
        <Grid item xs={12} md={6} className="flex justify-center items-center" >
            <Typography
                px={4}
                fontFamily="Nunito" fontSize={{
                    xs: '25px',
                    md: '30px',

                }}
            >
                Looking for an affordable and professional web solution for your
                business? We offer top-quality services
                to bring your ideas to life. With a focus on functionality and user-friendliness,
                I ensure a seamless experience from start to finish. Contact us today at chari.rightson@gmail.com
                to get started.
            </Typography>

        </Grid>
        <Grid item xs={12} md={6} className="bg-[#FFD9D9] min-h-[60vh] flex justify-center items-center ">
            <Box className='w-3/4 h-3/4 min-h-[40vh] bg-white flex justify-center items-center flex-col'>
                <Typography variant="h4" className="text-black" >10+</Typography>
                <Typography variant="h4" className="text-black" >websites</Typography>
            </Box>
        </Grid>


    </Grid>
};

export default AboutLast;
