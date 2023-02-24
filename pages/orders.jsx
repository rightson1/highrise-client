import { Avatar, Button, Chip, Fab, Grid, List, ListItem, ListItemIcon, ListItemText, Skeleton } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
import { Box } from "@mui/system";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useRouter } from "next/router";
import Title from "../components/Title";
import { useOrders } from "../utils/orderContext";
import { format } from "timeago.js";
import { useBusinessQuery } from "../utils/hooks/useBusiness";
import { useOrderQuery, useUpdateOrder } from "../utils/hooks/useOrder";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase"
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useAuth } from "../utils/authContext";
import OrderModal from "../components/OrderModal";
import Header from "../components/Head";



const Orders = () => {
    const router = useRouter()
    const [today, setToday] = useState(new Date().getDay());
    const { user } = useAuth();
    const { data: orders, isLoading } = useOrderQuery({ today });
    const [data, setData] = useState([])
    const { data: businesses } = useBusinessQuery()
    const { colors } = useGlobalProvider();
    const { mutateAsync: updateOrder, isError, isSuccess } = useUpdateOrder();
    const [open, setOpen] = useState(null)


    useEffect(() => {
        if (!orders) return;
        setData(orders.filter(order => order.type !== "gas"))
    }, [orders])



    const handleDelete = (order, business) => {
        if (!confirm("Are you sure you want to delete this order?")) return;
        const deleteRef = doc(db, "orders", order.realId)

        const del = () => deleteDoc(deleteRef).then(() => {

            toast.promise(updateOrder({
                id: order._id,
                key: business.key,
                name: user.displayName,
            }), {
                loading: "Cancelling order...",
                success: "Order deleted",
                error: "Error cancelling order"
            })

        }).catch((error) => {
            console.error("Error removing document: ", error);
        })
        toast.promise(del(), {
            loading: "Cancelling order...",
            success: "Order deleted",
            error: "Error cancelling order"
        })
    }


    return <Grid className="bg-primary p-2  ">
        <Title title="Orders" subtitle="All Your Order" />
        <Header title="Order" desc="All Your Order in foodie" />
        <Grid item component={Paper} elevation={2} className="bg-primary p-1 pt-3 pb-10 min-h-screen">

            <List>




                {
                    isLoading ? (<Box className=" flex flex-col gap-2">
                        <Skeleton variant="rectangular" width='95vh' height={70} />
                        <Skeleton variant="rectangular" width='95vh' height={11} />
                        <Skeleton variant="rectangular" width='95vh' height={71} />
                        <Skeleton variant="rectangular" width='95vh' height={11} />
                        <Skeleton variant="rectangular" width='95vh' height={70} />
                        <Skeleton variant="rectangular" width='95vh' height={11} />
                        <Skeleton variant="rectangular" width='95vh' height={71} />
                        <Skeleton variant="rectangular" width='95vh' height={11} />
                    </Box>
                    ) :
                        (data?.length > 0) ? (
                            data?.map((order, index) => {
                                const business = businesses?.find(business => business._id === order.business)
                                const item = order.items[0]

                                return (
                                    <article className='flex justify-between gap-4 p-3 mt-8 rounded-lg shadow-lg' key={index}>
                                        {businesses?.length > 0 && data.length > 0 && <OrderModal {...{ open, order, setOpen, business, items: order.items }} />}

                                        <div className='flex-1'>
                                            <img src={item.image} className='w-auto h-auto object-cover' />
                                        </div>

                                        <div className='flex-[2]'>
                                            <div className='mb-2'>
                                                <p className='mb-1 text-Grayish-blue'>{business?.name}</p>
                                                <h1 className='font-[600] mb-1'>{order.status}</h1>
                                                <p className=''>Ksh {order.total}</p>
                                            </div>
                                            {/* buttons */}
                                            <p>
                                                {format(order.createdAt)}
                                            </p>

                                            <div className='flex justify-between mt-5 gap-6 w-[93%]'>
                                                <div className='flex-[2] items-center flex justify-between'>

                                                    <span>{order.items?.length}</span>
                                                    <button
                                                        onClick={() => setOpen(order._id)}
                                                        className='flex items-center text-white justify-center px-8 h-8 oy-1 rounded-md bg-error '
                                                    >
                                                        View
                                                    </button>
                                                </div>
                                                <div className='flex justify-end flex-1'>
                                                    <button
                                                        onClick={() => handleDelete(order, business)}
                                                        className='flex items-center text-white justify-center w-8 h-8 rounded-[50%] bg-error'
                                                    >
                                                        <AiOutlineDelete />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                )
                            })

                        )



                            : (<Box className="flex flex-col justify-center items-center">
                                <Typography fontFamily="Atomic Age" className="text-xl font-bold">Your Have No Recent Orders</Typography>
                                <img src="/empty.png" className="h-auto max-h-[300px]" />

                            </Box>)
                }

            </List>


        </Grid>
        <Grid item>



        </Grid>
    </Grid>
}

Orders.layout = true;
export default Orders;
