import React from "react";
import { Box, Typography } from "@mui/material"
import { useGlobalProvider } from "../utils/themeContext"
// import Header from "./Header";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
const Title = ({ title, subtitle }) => {
    const { colors } = useGlobalProvider()
    return <Box px={2} pb={2}>
        {/* <Header title={title} desc={subtitle} /> */}
        {title && <Typography variant="h6" fontWeight="thin" sx={{
            fontSize: "1.2rem", fontFamily: "Nunito",
        }} color={colors.grey[100]}> Home <ChevronRightOutlinedIcon />
            <Typography fontWeight="bold" variant="h6" component="span" sx={{
                fontSize: "1.3rem",
                fontFamily: "Nunito",
            }}> {title}</Typography>

        </Typography>}
        <Typography variant="h3" fontWeight="bold"  >{subtitle}</Typography>
    </Box>;
};

export default Title;
