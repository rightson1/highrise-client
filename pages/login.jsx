import { Grid, Box, Paper, Typography, Button, Divider, CircularProgress, InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from "next/router";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Toaster, toast } from "react-hot-toast";
import { auth, db } from "../utils/firebase";
import { signInWithPopup, GoogleAuthProvider, } from "firebase/auth";
import { addDoc, collection, doc, query, where, getDocs } from "firebase/firestore";
const Login = () => {
    const [values, setValues] = useState(null);
    const [visibility, setVisibility] = useState(false);
    const router = useRouter();

    const { colors } = useGlobalProvider();

    const submit = (e) => {
        e.preventDefault();
        const { email, password } = values;
        const sign = () => auth.signInWithEmailAndPassword(email, password).then((res) => {
            const q = query(collection(db, "users"), where("email", "==", email));
            getDocs(q).then((res) => {
                const [remote, ...rest] = res.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                if (!remote) {
                    toast.error("User Not Found")
                } else {
                    router.push('/')
                }
            })
        }).catch((e) => {
            console.log(e)
        })
        toast.promise(sign(), {
            loading: "Loading...",
            success: "Signed In",
            error: "Error",
        })
    }
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        const sign = () => signInWithPopup(auth, provider).then((result => {
            const user = result.user;
            const q = query(collection(db, "users"), where("email", "==", user.email));
            getDocs(q).then((res) => {
                const [remote, ...rest] = res.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                if (!remote) {
                    toast.error("User Not Found")
                } else {
                    router.push('/')
                }
            })
        })).catch((e) => {
            console.log(e)
        })
        toast.promise(sign(), {
            loading: "Loading...",
            success: "Signed In",
            error: "Error",
        })
    }
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
            <img src="/img/login.png" alt="" className="w-full" />

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
                <Typography fontFamily="Nunito" variant="h2" className="font-bold self-start">Welcome Back</Typography>
                <Typography fontFamily="Nunito" variant="h6" className="font-semibold self-start">Dont have an account? <Typography component="span" fontFamily="Nunito" variant="h6" className="font-semibold self-start cursor-pointer" color={colors.find} onClick={() => router.push('/register')}>Register</Typography></Typography>
                <Box component="form" onSubmit={submit} className="flex flex-col">

                    <Box className="flex flex-col">
                        <Typography fontFamily="Nunito" variant="h6" className="font-semibold self-start">Email</Typography>
                        <Box className="w-full flex rounded-md p-2 " sx={{ bgcolor: colors.red[300] }}>
                            <InputBase type="email" name="email" onChange={handleChange} required className="  flex-1 " fullWidth />
                            <EmailOutlinedIcon sx={{ color: 'black', }} />
                        </Box>
                    </Box>
                    <Box className="flex flex-col">
                        <Typography fontFamily="Nunito" variant="h6" className="font-semibold self-start">Password</Typography>
                        <Box className="w-full flex rounded-md p-2 " sx={{ bgcolor: colors.red[300] }}>
                            <InputBase type={visibility ? 'text' : 'password'} name="password" required onChange={handleChange} className="  flex-1 " fullWidth />
                            {visibility ? <RemoveRedEyeOutlinedIcon onClick={() => setVisibility(false)} sx={{ color: 'black', }} /> : <VisibilityOffOutlinedIcon sx={{ color: 'black', }} onClick={() => setVisibility(true)} />}
                        </Box>
                    </Box>
                    <Grid container spacing={2} className="flex items-center flex mt-3">
                        <Grid item xs={6} md={6} className="flex  items-center">
                            <Typography sx={{ color: colors.submit }} fontFamily="Nunito" variant="h5" className="font-semibold self-start text-center">
                                Forgot Password?
                            </Typography>

                        </Grid>
                        <Grid item xs={6} md={6} className="flex flex-col " >
                            <Button type="submit" my={4} sx={{
                                color: colors.black[900],
                                bgcolor: colors.submit + " !important",
                            }}>Login</Button>
                        </Grid>

                    </Grid>
                </Box>


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
                    <Typography fontFamily="Nunito" variant="body1" className=" text-black"
                    >Sign Up With Google</Typography>
                </Button>
            </Box>
        </Grid>
        <Toaster />
    </Grid>;
};
Login.nolayout = true;
export default Login;
