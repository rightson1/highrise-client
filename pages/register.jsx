import { Grid, Box, Paper, Typography, Button, Divider, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from "next/router";
const Register = () => {
    const [values, setValues] = useState(null);
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        opened: false,
        error: null,
    })

    const { colors } = useGlobalProvider();
    const handleChange = (e) => {

        setValues({ ...values, [e.target.name]: e.target.value })

    }
    return <Grid container
        sx={{
            zIndex: 5,
        }}
    >
        <Grid item className="overflow-hidden"
            xs={12}
            md={6}
            sx={{
                width: "100%",

                height: {
                    xs: "60vh",
                    md: "100vh"
                },
            }}
        >
            <img src="/table.svg" alt="" />

        </Grid>
        <Grid item
            xs={12}
            component={Paper}
            md={6}
            sx={{
                width: "100%",
                gap: 1,
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

            }}
        >
            <Typography fontFamily="Atomic Age" variant="h3" className="font-bold self-start">H-Foods</Typography>
            <Box my={5} className="flex flex-col w-full gap-4">
                <Typography fontFamily="Nunito" variant="h3" className="font-semibold self-start">Create An  Account</Typography>
                <Typography fontFamily="Nunito" variant="h6" className="font-semibold self-start">Already have an account? <Typography component="span" fontFamily="Nunito" variant="h6" className="font-semibold self-start" color={colors.find}>Log In</Typography></Typography>
                <div className="flex flex-col">

                </div>
            </Box>
        </Grid>
    </Grid>;
};
Register.nolayout = true;
export default Register;
