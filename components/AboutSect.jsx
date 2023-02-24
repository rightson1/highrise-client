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
                Introducing {`"Hfoods"`} - the ultimate food ordering platform for Highrise/Canaan! Our platform connects you
                with local food stops through mini-websites showcasing their menus. Order easily and conveniently, with
                delivery straight to your doorstep. Support local businesses and enjoy diverse food options in our community.





            </Typography>

        </Grid>

    </Grid>
};

export default AboutSec;
