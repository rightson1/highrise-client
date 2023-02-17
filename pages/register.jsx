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
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { auth, db } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { signInWithPopup, GoogleAuthProvider, } from "firebase/auth";
import { addDoc, collection, doc, query, where, getDocs } from "firebase/firestore";
const Register = () => {
    const [values, setValues] = useState(null);
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [visibility, setVisibility] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [phone, setPhone] = useState(null);
    const [data, setData] = useState(null);
    const [state, setState] = useState({
        opened: false,
        error: null,
    })
    const { colors } = useGlobalProvider();
    const handleChange = (e) => {

        setValues({ ...values, [e.target.name]: e.target.value })

    }
    const add = (userRef, email, data) => addDoc(userRef, {
        email,
        ...data
    }).then(() => {
        router.push('/')
    }
    ).catch((res) => {
        console.log('res')
        toast.error(res?.message);
    })

    const submit = (e) => {

        const userRef = collection(db, 'users')
        e.preventDefault();

        const data = { password: values.password, name: values.name, phone: values.phone, provider: 'email' };
        const create = () => createUserWithEmailAndPassword(auth, values.email, values.password).then((user) => {
            const { email, uid } = user.user;

            add(userRef, email, data)
        })
        toast.promise(create(), {
            loading: 'Loading...',
            success: 'Account Created',
            error: 'Error',

        })
    }
    const handleUser = () => {

        if (!data) return;
        if (!phone) {
            return toast.error('Please enter your phone number')
        }
        const q = query(collection(db, "users"), where("email", "==", data.email));
        const get = () => getDocs(q).then((res) => {
            const [remote, ...rest] = res.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            if (!remote) {
                const userRef = collection(db, "users")

                addDoc(userRef, {
                    ...data,
                    phone
                }).then(() => {
                    router.push('/')
                })
            } else {
                router.push('/')
            }
        })
        toast.promise(get(), {
            loading: 'Loading...',
            success: 'Account Created',
            error: 'Error',
        })
    }
    const signInWithGoogle = (id) => {
        const provider = new GoogleAuthProvider();

        const signIn = () => signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const user = result.user;
                setOpen(true)
                setData({
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    uid: user.uid,
                    provider: 'google',
                    phone,
                })
            })
        toast.promise(signIn(), {
            loading: 'Loading...',

            error: 'Error,check your internet connection',
        })

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
            <img src="/table.png" alt="" className="w-full" />

        </Grid>
        <Grid item
            xs={12}
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
            <Typography fontFamily="Atomic Age" variant="h3" className="font-bold self-start">Foodie</Typography>
            <Box mt={5} className="flex flex-col w-full gap-4" component="form" onSubmit={submit}>
                <Typography fontFamily="Nunito" variant="h3" className="font-semibold self-start">Create An  Account</Typography>
                <Typography fontFamily="Nunito" variant="h6" className="font-semibold self-start">Already have an account? <Typography component="button" fontFamily="Nunito" variant="h6" className="font-semibold self-start cursor-pointer" color={colors.find} onClick={() => router.push('/login')}>Log In</Typography></Typography>
                <div className="flex flex-col">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} className="flex flex-col">
                            <Typography fontFamily="Nunito" variant="h6" className="font-semibold self-start">Name</Typography>
                            <Box className="w-full flex rounded-md p-2 " sx={{ bgcolor: colors.red[300] }}>
                                <InputBase required type="text" name="name" onChange={handleChange} className="  flex-1 " fullWidth />
                                <Person2OutlinedIcon sx={{ color: 'black', }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} className="flex flex-col">
                            <Typography fontFamily="Nunito" variant="h6" className="font-semibold self-start">Phone</Typography>
                            <Box className="w-full flex rounded-md p-2 " sx={{ bgcolor: colors.red[300] }}>
                                <InputBase type="text" name="phone" required onChange={handleChange} className="  flex-1 " fullWidth />
                                <LocalPhoneOutlinedIcon sx={{ color: 'black', }} />
                            </Box>
                        </Grid>

                    </Grid>
                    <Box className="flex flex-col">
                        <Typography fontFamily="Nunito" variant="h6" className="font-semibold self-start">Email</Typography>
                        <Box className="w-full flex rounded-md p-2 " sx={{ bgcolor: colors.red[300] }}>
                            <InputBase type="email" name="email" required onChange={handleChange} className="  flex-1 " fullWidth />
                            <EmailOutlinedIcon sx={{ color: 'black', }} />
                        </Box>
                    </Box>
                    <Box className="flex flex-col">
                        <Typography fontFamily="Nunito" variant="h6" className="font-semibold self-start">Password</Typography>
                        <Box className="w-full flex rounded-md p-2 " sx={{ bgcolor: colors.red[300] }}>
                            <InputBase required type={visibility ? "text" : 'password'} name="password" onChange={handleChange} className="  flex-1 " fullWidth />
                            {visibility ? <RemoveRedEyeOutlinedIcon onClick={() => setVisibility(false)} sx={{ color: 'black', }} /> : <VisibilityOffOutlinedIcon sx={{ color: 'black', }} onClick={() => setVisibility(true)} />}
                        </Box>
                    </Box>
                </div>
                <Button my={4}
                    type="submit"
                    sx={{
                        color: colors.black[900],
                        bgcolor: colors.submit + " !important",
                    }}>Create Account</Button>
                <Divider />
            </Box>

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
                <Typography fontFamily="Nunito" variant="body1" className=" text-black">Continue With Google</Typography>
            </Button>
        </Grid>

        <Dialog open={open}
        // onClose={handleClose}
        >
            <DialogTitle>Phone Number</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Hey, sorry,but we will nedd your phone number before you can continue,
                    dont worry we will not share it with anyone
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Phone Number"
                    type="tel"
                    onChange={(e) => setPhone(e.target.value)}
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)} >Cancel</Button>
                <Button onClick={() => handleUser()}>Submit</Button>
            </DialogActions>
        </Dialog>
        <Toaster />
    </Grid>;
};
Register.nolayout = true;
export default Register;
