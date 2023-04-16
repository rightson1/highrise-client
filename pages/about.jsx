import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import AboutHero from "../components/AboutHero";
import AboutLast from "../components/AboutLast";
import AboutSec from "../components/AboutSect";
import Me from "../components/Me";
import Modal from '@mui/material/Modal';

const About = () => {
    const [open, setOpen] = React.useState(null);

    const handleClose = () => setOpen(null);
    return <Box>
        <AboutHero />
        <AboutSec />
        <Me />

    </Box>
};


About.layout = true
export default About;
