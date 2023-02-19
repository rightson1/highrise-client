import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

const AboutGas = () => {
    return <div className="flex flex-col gap-8">
        <div className="flex flex-col justify-center items-center">
            <Typography fontFamily="Playfair Display" className="font-bold" fontWeight={700} fontSize={30}>How It Works</Typography>
            <Typography fontFamily="Inter" fontSize={17} className="text-center px-10" >
                Using Gassie is easy! Simply select your preferred gas size and company,
                browse through vendor profiles, and choose your favorite one. Place your order
                online and enjoy reliable delivery right to your doorstep. We take the hassle out
                of finding cooking gas vendors in Highrise/Canaan estate, making it simple and
                stress-free for you.
            </Typography>
        </div>
        <Grid container className="my-5" spacing={2}>
            <Grid item xs={12} md={4} className="flex justify-center items-center"
                flexDirection="column">
                <img src="/img/Icon1.svg" />
                <Typography className="font-bold" fontWeight={500} fontFamily="Playfair Display" fontSize={25}>Fast Delivery</Typography>
                <Typography fontFamily="Inter" fontSize={15} className="text-center px-10" >
                    Gassie provides a convenient platform for you to
                    select your preferred cooking gas size, company, and vendor.
                    When you place an order on our website, the vendor you choose will be responsible
                    for delivering the gas to your doorstep. We simply connect you with the vendor,
                    and they handle the delivery process. This ensures fast, efficient, and reliable delivery
                    services straight to your home or business.
                </Typography>
            </Grid>
            <Grid item xs={12} md={4} className="flex justify-center items-center"
                flexDirection="column">
                <img src="/img/Icon2.svg" />
                <Typography className="font-bold" fontWeight={500} fontFamily="Playfair Display" fontSize={25}>No Charges</Typography>
                <Typography fontFamily="Inter" fontSize={15} className="text-center px-10" >
                    At Gassie, we believe in providing our customers with a free and
                    accessible platform to find the best cooking gas vendors. We dont
                    charge any fees or commissions to our customers, making it easy and
                    affordable for everyone to access reliable gas delivery services. Our
                    priority is your convenience and satisfaction, and we strive to make it as
                    easy as possible for you to find the right vendor for your cooking gas needs.
                </Typography>
            </Grid>
            <Grid item xs={12} md={4} className="flex justify-center items-center"
                flexDirection="column">
                <img src="/img/Icon3.svg" />
                <Typography className="font-bold" fontWeight={500} fontFamily="Playfair Display" fontSize={25}>Any Vendor</Typography>
                <Typography fontFamily="Inter" fontSize={15} className="text-center px-10" >
                    At Gassie, we pride ourselves on offering a wide variety of cooking gas options,
                    including those with unique names. We understand that every customer
                    has different preferences, and we strive to accommodate them all. Our diverse
                    range of gas types ensures that you
                    can easily find what you need and enjoy fast, reliable delivery
                    services straight to your doorstep.
                </Typography>
            </Grid>
        </Grid>

    </div>;
};

export default AboutGas;
