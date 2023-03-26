import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const GasHero = () => {
    return <Grid container className=" ">
        <Grid item xs={12} md={6} className="flex items-center gap-2"
            sx={{
                flexDirection: 'column',
                justifyContent: {
                    xs: "start",
                    md: 'center',
                }
            }}
        >
            <Typography fontFamily="Playfair Display" fontSize={40} className="text-center px-10" >
                Cooking gas delivery done right!
            </Typography>
            <Typography fontFamily="Roboto" fontSize={19} className="text-center px-5" >
                Welcome to hgas, your one-stop website for cooking gas vendors in Highrise/Canaan estate.
                Browse vendor profiles and product listings, select your gas size and company, and choose your favorite vendor.
                Click on the gas item and see more infomation about supplier and product.
            </Typography>
            <div className="hidden md:flex gap-7 items-end ">
                <Box className="bg-white w-[120px] h-[120px] p-3 rounded-md" sx={{
                    bgcolor: 'white',

                }}>
                    <img src="/img/6.png" alt="" />
                </Box>
                <div className="bg-white w-[120px] h-[150px] p-3 rounded-md">
                    <img src="/img/13.png" alt="" />
                </div>
            </div>

        </Grid>
        <Grid item xs={0} md={6} className="justify-center items-start"
            sx={{
                display: {
                    xs: 'none',
                    md: 'flex'
                }
            }}>
            <div className="flex gap-7 items-end">
                <div className="bg-white w-[200px] h-auto p-3 rounded-md object-cover">
                    <img src="/img/22.png" alt="" />
                </div>
                <div className="bg-white w-[200px] h-auto object-cover p-3 rounded-md">
                    <img src="/img/50.png" alt="" />
                </div>
            </div>

        </Grid>

    </Grid>
};

export default GasHero;
