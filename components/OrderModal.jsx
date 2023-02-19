
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { IconButton, Typography } from '@mui/material';
import { useGlobalProvider } from '../utils/themeContext';
import { useAuth } from '../utils/authContext';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useNewOrder } from "../utils/hooks/useOrder";
import { format } from 'timeago.js'
import Close from '@mui/icons-material/Close';

const OrderModal = ({ open, setOpen, order, items, business }) => {
    const { colors } = useGlobalProvider();
    const { mutate, isSuccess, isError } = useNewOrder();
    const { user } = useAuth()

    return <Dialog open={open === order._id} onClose={() => setOpen(false)} fullWidth maxWidth="sm"
        component="form"

    >
        <DialogTitle className='flex justify-between'>
            <Typography variant='h6' className='font-[600]'>Order Items</Typography>
          <IconButton onClick={()=>setOpen(null)}>
                <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
            {


                items?.map((item, index) => {
                    return (
                        <article className='flex justify-between gap-4 p-3 mt-8 rounded-lg shadow-lg' key={index}>

                            <div className='flex-1'>
                                <img src={item.image} className='w-auto h-auto object-cover' />
                            </div>

                            <div className='flex-[2]'>
                                <div className='mb-2'>
                                    <p className='mb-1 text-Grayish-blue'>{business?.name}</p>
                                    <h1 className='font-[600] mb-1'>{item.name}</h1>
                                    <p className=''>Ksh {item.price}</p>
                                </div>
                                {/* buttons */}
                                <p>
                                    {order.location} {order.details && ", " + order.details}
                                </p>

                                <div className='flex justify-between mt-5 gap-6 w-[93%]'>
                                    <span>     {item.qty}
                                    </span>
                                    <span className='capitalize'>{item?.options[0]?.optionName}...</span>
                                </div>
                            </div>
                        </article>
                    )
                })


            }

        </DialogContent>
        <DialogActions>


        </DialogActions>
    </Dialog>
};

export default OrderModal;
