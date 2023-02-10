import { Grid, Box, Paper, Typography, Button, Divider, CircularProgress, InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from "next/router";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
const Login = () => {
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
            <img src="/table.png" alt="" />

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

                    <Box className="flex flex-col">
                        <Typography fontFamily="Nunito" variant="h6" className="font-semibold self-start">Email</Typography>
                        <Box className="w-full flex rounded-md p-2 " sx={{ bgcolor: colors.red[300] }}>
                            <InputBase type="text" name="firstName" onChange={handleChange} className="  flex-1 " fullWidth />
                            <EmailOutlinedIcon sx={{ color: 'black', }} />
                        </Box>
                    </Box>
                    <Box className="flex flex-col">
                        <Typography fontFamily="Nunito" variant="h6" className="font-semibold self-start">Password</Typography>
                        <Box className="w-full flex rounded-md p-2 " sx={{ bgcolor: colors.red[300] }}>
                            <InputBase type="text" name="firstName" onChange={handleChange} className="  flex-1 " fullWidth />
                            <RemoveRedEyeOutlinedIcon sx={{ color: 'black', }} />
                        </Box>
                    </Box>
                </div>
                <Grid container spacing={2} className="flex items-center flex">
                    <Grid item xs={6} md={6} className="flex  items-center">
                        <Typography sx={{ color: colors.submit }} fontFamily="Nunito" variant="h5" className="font-semibold self-start text-center">
                            Forgot Password?
                        </Typography>

                    </Grid>
                    <Grid item xs={6} md={6} className="flex flex-col ">
                        <Button my={4} sx={{
                            color: colors.black[900],
                            bgcolor: colors.submit + " !important",
                        }}>Create Account</Button>
                    </Grid>

                </Grid>

                <Divider />
                <Button
                    className="flex gap-2 items-center justify-center border-gray-300 "
                    onClick={() => signInWithGoogle()}
                    sx={{
                        bgcolor: 'transparent',
                        width: "100%",
                        border: `2px solid ${colors.black[300]}`,

                    }}
                >   <GoogleIcon sx={{
                    color: colors.orange[500],
                    fontSize: "2rem",

                }}
                    />
                    <Typography fontFamily="Nunito" variant="body1" className=" text-black">Sign Up With Google</Typography>
                </Button>
            </Box>
        </Grid>
    </Grid>;
};
Login.nolayout = true;
export default Login;
