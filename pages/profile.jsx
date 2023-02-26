import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { useGlobalProvider } from "../utils/themeContext";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useRouter } from "next/router";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import KeyIcon from '@mui/icons-material/Key';
import Button from "@mui/material/Button";
import { toast, Toaster } from "react-hot-toast";
import { useAuth } from "../utils/authContext";
import { db } from "../utils/firebase";
import { deleteUser, updatePassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
const Profile = () => {
    const { colors } = useGlobalProvider();
    const [values, setValues] = useState(null);
    const router = useRouter();
    const { user, admin } = useAuth()
    const [visibility, setVisibility] = useState(false)
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const submit = (e) => {
        if (!user) {
            toast.error('Please login to continue')
            setTimeout(() => {
                router.push('/login')
            }, 2000)
        }
        if (values) {
            localStorage.removeItem('user')
            const updateRef = doc(db, 'users', user.id)
            const update = () => updateDoc(updateRef, values)
            toast.promise(update(), {
                loading: 'Updating...',
                success: 'Updated',
                error: 'Error'
            })

        }
    }
    const deleteAccount = () => {
        const id = user.id
        toast.loading('Deleting account...')
        window.confirm('Delete Account?') && deleteUser(auth.currentUser).then(() => {
            const deleteRef = doc(db, 'users', id)
            deleteDoc(deleteRef).then(() => {
                toast.success('Account deleted')
                setTimeout(() => {
                    router.push('/')
                }, 2000)
            }).catch((error) => {
                toast.dismiss()
                console.log(error)
                toast.error('There was an error deleting your account')

            })

        }).catch((error) => {
            toast.dismiss()
            console.log(error)
            toast.error('There was an error deleting your account')

        })

    }
    return <Grid container className="border-t-2 border-[rgba(0,0,0,.4)]'" >
        <Grid item md={4} className="border-r-2 border-[rgba(0,0,0,.4)]'" sx={{
            display: {
                xs: 'none',
                md: 'block',
            }
        }}>
            <Box className="flex items-center justify-center" sx={{
                bgcolor: colors.primary[800],
            }}>
                <ModeEditOutlineOutlinedIcon />
                <Typography fontFamily="nunito" className="text-xl font-bold text-center">Edit Profile</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={4} className="min-h-[80vh] p-5 " >
            <div className="flex justify-center gap-5">
                <Typography fontFamily="nunito" className="text-xl font-bold ">Edit Profile</Typography>
                <img src="/avatar.png" alt="" className="w-[100px] h-[100px] object-cover  rounded-md" />
            </div>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6} className="flex flex-col">
                    <Typography fontFamily="Nunito" variant="h6" className="font-semibold self-start"
                    >Name</Typography>
                    <Box className="w-full flex rounded-md p-2 " sx={{ bgcolor: colors.red[300] }}>
                        <InputBase required placeholder={user?.displayName || "Name"} type="text" name="name" onChange={handleChange} className="  flex-1 " fullWidth />
                        <Person2OutlinedIcon sx={{ color: 'black', }} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} className="flex flex-col">
                    <Typography fontFamily="Nunito" variant="h6" className="font-semibold self-start">Phone</Typography>
                    <Box className="w-full flex rounded-md p-2 " sx={{ bgcolor: colors.red[300] }}>
                        <InputBase type="text" name="phone" placeholder={user?.phone || "Phone"} required onChange={handleChange} className="  flex-1 " fullWidth />
                        <LocalPhoneOutlinedIcon sx={{ color: 'black', }} />
                    </Box>
                </Grid>

            </Grid>
            <Typography fontFamily="nunito" className="text-xl font-bold my-5">Security</Typography>
            <Box className="flex flex-col">
                <Typography fontFamily="Nunito" variant="h6" className="font-semibold self-start">Email</Typography>
                <Box className="w-full flex rounded-md p-2 " sx={{ bgcolor: colors.red[300] }}>
                    <InputBase readOnly type="text" placeholder={user?.email || "Email"} name="email" required onChange={handleChange} className="  flex-1 " fullWidth />
                    <LocalPhoneOutlinedIcon sx={{ color: 'black', }} />
                </Box>
            </Box>
            {/* <Box className="flex flex-col">
                <Typography fontFamily="Nunito" variant="h6" className="font-semibold self-start">Password</Typography>
                <Box className="w-full flex rounded-md p-2 " sx={{ bgcolor: colors.red[300] }}>
                    <InputBase  required type={visibility ? "text" : 'password'} name="password" onChange={handleChange} className="  flex-1 " fullWidth />
                    {visibility ? <RemoveRedEyeOutlinedIcon onClick={() => setVisibility(false)} sx={{ color: 'black', }} /> : <VisibilityOffOutlinedIcon sx={{ color: 'black', }} onClick={() => setVisibility(true)} />}
                </Box>
            </Box> */}
            <Typography fontFamily="nunito" className="text-xl font-bold mt-5 mb-2">Notifications</Typography>
            <Typography fontFamily="nunito" className="font-normal">For you to receive notification if there are changes in your
                order, you will have to install the  Notify API-Notify Droi  app from playstore, then paste
                the user token below NB:NOT the url</Typography>
            <Box className="w-full flex rounded-md p-2  my-3" sx={{ bgcolor: colors.red[300] }}>
                <InputBase type="text" name="key" required onChange={handleChange} className="  flex-1 " fullWidth />
                <KeyIcon sx={{ color: 'black', }} />
            </Box>
            <Button my={4}
                onClick={submit}
                sx={{
                    color: colors.black[900],
                    bgcolor: colors.submit + " !important",
                }}>Update Account</Button>
            <Button my={4} className="my-2  w-full block"
                onClick={deleteAccount}
                sx={{
                    color: colors.black[900],
                    bgcolor: colors.red[700] + " !important",
                }}>Delete Acount</Button>
        </Grid>
        <Toaster />

    </Grid>
};


Profile.layout = true;
export default Profile;
