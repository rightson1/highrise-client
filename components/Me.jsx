import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const Me = () => {
    return <Grid container spacing={2} mt={1} direction={{
        xs: 'column',
        md: 'row-reverse'
    }} >
        <Grid item xs={12} md={6} className="bg-[#FFD9D9] min-h-[60vh] flex justify-center items-center ">
            <Box className='w-3/4 h-3/4 min-h-[40vh] bg-white flex justify-center items-center flex-col'>
                <Typography variant="h4" className="text-black" >2nd Year</Typography>
                <Typography variant="h4" className="text-black" >Rightson Tole</Typography>
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
                This web app was developed by Tole Rightson Kirigha and designed by Meshack Mutinda.
                Am still adding features to this website, if you need any help or have any suggestions, please contact me at
                chari.rightson@gmail.com, you can also contact me if you need a website for your business.
            </Typography>

        </Grid>



    </Grid>
};

export default Me;
