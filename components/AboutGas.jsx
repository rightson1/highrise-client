import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

const AboutGas = () => {
    return <div className="flex flex-col gap-8">
        <div className="flex flex-col justify-center items-center">
            <Typography fontFamily="Playfair Display" className="font-bold" fontWeight={700} fontSize={30}>How It Works</Typography>
            <Typography fontFamily="Inter" fontSize={17} className="text-center px-10" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit natus aliquid soluta dolores, mollitia recusandae ullam placeat incidunt illum?
            </Typography>
        </div>
        <Grid container className="my-5" spacing={2}>
            <Grid item xs={12} md={4} className="flex justify-center items-center"
                flexDirection="column">
                <img src="/img/Icon1.svg" />
                <Typography className="font-bold" fontWeight={500} fontFamily="Playfair Display" fontSize={25}>Fast Delivery</Typography>
                <Typography fontFamily="Inter" fontSize={15} className="text-center px-10" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit natus aliquid soluta dolores, mollitia recusandae ullam placeat incidunt illum?
                </Typography>
            </Grid>
            <Grid item xs={12} md={4} className="flex justify-center items-center"
                flexDirection="column">
                <img src="/img/Icon2.svg" />
                <Typography className="font-bold" fontWeight={500} fontFamily="Playfair Display" fontSize={25}>No Charges</Typography>
                <Typography fontFamily="Inter" fontSize={15} className="text-center px-10" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit natus aliquid soluta dolores, mollitia recusandae ullam placeat incidunt illum?
                </Typography>
            </Grid>
            <Grid item xs={12} md={4} className="flex justify-center items-center"
                flexDirection="column">
                <img src="/img/Icon3.svg" />
                <Typography className="font-bold" fontWeight={500} fontFamily="Playfair Display" fontSize={25}>Any Vendor</Typography>
                <Typography fontFamily="Inter" fontSize={15} className="text-center px-10" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit natus aliquid soluta dolores, mollitia recusandae ullam placeat incidunt illum?
                </Typography>
            </Grid>
        </Grid>

    </div>;
};

export default AboutGas;
