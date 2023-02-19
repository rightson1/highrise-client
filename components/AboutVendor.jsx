import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

const AboutGas = ({ business }) => {
    return <div className="flex flex-col gap-8">
        <div className="flex flex-col justify-center items-center">
            <Typography fontFamily="Playfair Display" className="font-bold" fontWeight={700} fontSize={30}>About Us</Typography>
            <Typography fontFamily="Inter" fontSize={17} className="text-center px-10" >
                {business.desc},You can call us using {business.phone}
            </Typography>
        </div>
        <Grid container className="my-5" spacing={2}>
            <Grid item xs={12} md={4} className="flex justify-center items-center"
                flexDirection="column">
                <img src="/img/Icon1.png" />
                <Typography className="font-bold" fontWeight={500} fontFamily="Playfair Display" fontSize={25}>Delivery</Typography>
                <Typography fontFamily="Inter" fontSize={15} className="text-center px-10" >
                    {business.delivery ? "We deliver to your doorstep ," : "We do not deliver to your doorstep ,"}
                    {business.details}
                </Typography>
            </Grid>
            <Grid item xs={12} md={4} className="flex justify-center items-center"
                flexDirection="column">
                <img src="/img/Icon3.png" />
                <Typography className="font-bold" fontWeight={500} fontFamily="Playfair Display" fontSize={25}>Location</Typography>
                <div className=" img-over ">
                    <img src={business.locationImg} className="h-[200px] object-cover rounded-md w-full object-cover overflow-hidden" />
                </div>
            </Grid>
            <Grid item xs={12} md={4} className="flex justify-center items-center"
                flexDirection="column">
                <img src="/img/Icon2.png" />
                <Typography className="font-bold" fontWeight={500} fontFamily="Playfair Display" fontSize={25}>More</Typography>
                <Typography fontFamily="Inter" fontSize={15} className="text-center px-10" >
                    {business.location}
                </Typography>
            </Grid>

        </Grid>

    </div>;
};

export default AboutGas;
