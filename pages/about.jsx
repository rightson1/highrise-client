import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import AboutHero from "../components/AboutHero";
import AboutLast from "../components/AboutLast";
import AboutSec from "../components/AboutSect";

const About = () => {
    return <Box>
        <AboutHero />
        <AboutSec />
        <AboutLast />
    </Box>
};


About.layout = true
export default About;
