
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useGlobalProvider } from '../utils/themeContext';
import { useAuth } from '../utils/authContext';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useNewOrder } from "../utils/hooks/useOrder";
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import axios from 'axios';
const CheckoutGas = ({ open, setOpen, product, business }) => {
    const { colors } = useGlobalProvider();
    const { mutate, isSuccess, isError } = useNewOrder();
    const { user } = useAuth()

    useEffect(() => {

        if (isSuccess) {
            toast.success("Order Creates")
            business.key && axios.post('https://api.simplepush.io/send', {
                "key": business.key,
                "title": "You have a New Order",
                "msg": `You have a new order from ${user.displayName}, who has ordered ${product.name} `,
                "event": "event"
            }).catch((e) => {
                console.log(e)
            })
        }
        else if (isError) {
            toast.error("There was an error")
        }
    }, [isError, isSuccess])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user) {
            toast.error('Please login to continue, you will be redirected to login page')
            setTimeout(() => {
                router.push('/login')

            }, 2000)

        } else {
            toast.loading('Creating Order...')
            const location = e.target?.location?.value
            const items = [{ ...product, qty: 1 }]
            const id = business?._id;
            const data = {
                name: user.displayName, email: user.email, phone: user.phone, location, total: product.price, business: id, key: business.key,
                type: business?.type, items, status: 'Pending', date: {
                    day: new Date().getDate(),
                    week: Math.ceil((new Date()).getDate() / 7),
                    month: new Date().getMonth(),
                },
                payment: 'Pending'
            }
            const cartRef = collection(db, 'orders')

            addDoc(cartRef, {
                user: user?.email,
                business: id,
                key: user.key || '',
                status: 'Pending',
                name: business?.name,
                read: 'false',
                message: 'Placed A New Order',
                userName: user?.displayName,
                date: {
                    day: new Date().getDate(),
                    week: Math.ceil((new Date()).getDate() / 7),
                    month: new Date().getMonth(),
                }
            }).then((res) => {
                const realId = res.id
                toast.dismiss();
                mutate({ realId, ...data })
            }).catch((err) => {
                toast.dismiss()
                toast.error('Error', {
                    timeout: 2000
                })

            })
        }


        setOpen(false)

    }
    return <Dialog open={open} onSubmit={handleSubmit}
        component="form"

    >
        <DialogTitle>Complete Order</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Your phone number will be shared with the supplier in case he needs to contact you,
                Any additional charges depends on you supplier
            </DialogContentText>
            <Box className="my-5  flex flex-col gap-2">
                <Typography className='text-xl ' fontFamily="Nunito">Add Location Details</Typography>
                <Box
                    component="textarea"
                    name="location"
                    sx={{
                        width: "100%",
                        outline: colors.teal[100],
                        border: `1px solid ${colors.primary[900]}`,
                        p: 1,
                        '$:focus': {
                            outline: colors.teal[100],
                        }
                    }}
                    className="resize-none rounded-md px-2 focus:border-teal-500 focus:border-2 "
                    required
                    placeholder="Specify Your Block Number, Floor, Room Number or updated phone number"
                />
            </Box>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setOpen(false)} >Cancel</Button>
            <Button type="submit">Submit</Button>
        </DialogActions>
    </Dialog>
};

export default CheckoutGas;
