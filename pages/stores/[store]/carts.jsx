import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import Title from "../../../components/Title";
import { useGlobalProvider } from "../../../utils/themeContext";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import { useRouter } from "next/router";
import Image from "next/image";
import Cart from "../../../public/empty.png"
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CustomeStepper from "../../../components/CustomStepper";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Delete } from "@mui/icons-material";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Button, IconButton, Badge } from "@mui/material";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Edit from "../../../components/Edit";
import { useAuth } from "../../../utils/authContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { toast, Toaster } from "react-hot-toast";
import { useNewOrder } from "../../../utils/hooks/useOrder";
import { LoadingButton } from "@mui/lab";
import { useSingleBusinessQuery } from "../../../utils/hooks/useBusiness";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
const Category = () => {
    const [open, setOpen] = React.useState(null);
    const { colors, cart, setCart, animate, setAnimate } = useGlobalProvider()
    const { mutate, isSuccess, isError } = useNewOrder();
    const [drawer, setDrawer] = useState(false)
    const [loading, setLoading] = useState(false)
    const [food, setFood] = useState(null)
    const { admin, user } = useAuth()
    const router = useRouter()
    const { store } = router.query
    const [storeCart, setStoreCart] = useState(null)
    const { data: business } = useSingleBusinessQuery(store)

    const [total, setTotal] = useState(0)
    const [on, setOn] = useState(false)
    useEffect(() => {
        document.addEventListener('visibilitychange', function (e) {
            setOn(!on)
        });
        return () => {
            document.removeEventListener('visibilitychange', function (e) {
                setOn(!on)
            });
        }
    }, [])

    useEffect(() => {
        if (cart) {
            setStoreCart(cart.find((item) => item.id === store))
            setTotal(cart.find((item) => item.id === store)?.items.reduce((total, item) => { return total + item.price }, 0))

        }
    }, [cart, on, admin])

    const handleClear = () => {
        setCart(cart.filter((item) => item.id !== store))
        setStoreCart(null)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!admin) {
            toast.error('Please login to continue, you will be redirected to login page')
            setTimeout(() => {
                router.push('/login')

            }, 2000)

        } else {


            setLoading(true);

            if (!storeCart.items.length > 0) {
                toast.error('Cart is empty')
                return
            }
            const location = e.target.location.value
            const description = e.target.details.value
            const { id, items } = storeCart;

            const data = {
                name: admin.displayName, email: admin.email, phone: user.phone, type: business.type, location, total, description, business: id, key: business.key, key2: business.key2, items, status: 'Pending', date: {
                    day: new Date().getDate(),
                    week: Math.ceil((new Date()).getDate() / 7),
                    month: new Date().getMonth(),
                },
                payment: 'Pending'
            }
            const cartRef = collection(db, 'orders')

            addDoc(cartRef, {
                user: admin?.email,
                business: storeCart.id,
                key: user.key || '',
                status: 'Pending',
                name: business?.name,
                read: 'false',
                message: 'Placed A New Order',
                userName: admin?.displayName,
                date: {
                    day: new Date().getDate(),
                    week: Math.ceil((new Date()).getDate() / 7),
                    month: new Date().getMonth(),
                }
            }).then((res) => {
                const realId = res.id
                mutate({ realId, ...data })
            }).catch((err) => {
                toast.error('Error', {
                    timeout: 2000
                })
                setLoading(false)
            })
        }




    }


    useEffect(() => {
        if (isError) {
            toast.error('Error', {
                timeout: 2000
            })
            setLoading(false)
        }
        if (isSuccess) {
            toast.success('Order placed', {
                timeout: 2000
            })
            setLoading(false)
            setCart(cart.filter((item) => item.id !== store))
            localStorage.setItem('cart', JSON.stringify(cart.filter((item) => item.id !== store)))
            router.push(`/stores/${store}`)



        }

    }, [isError, isSuccess])

    const handleEdit = (id, op) => {
        if (op === 0) {
            if (storeCart.items.find((item) => item.id === id).qty === 1) {
                const items = cart.map((item) => {
                    if (item.id === store) {
                        return {
                            ...item,
                            items: item.items.filter((item) => item.id !== id)
                        }
                    }
                    return item
                })
                setCart(items)
                localStorage.setItem('cart', JSON.stringify(items))
                if (storeCart.items.length === 1) {
                    handleClear()
                    localStorage.setItem('cart', JSON.stringify(cart.filter((item) => item.id !== store)))
                }

                return;


            }
            const items = cart.map((item) => {
                if (item.id === store) {
                    return {
                        ...item,
                        items: item.items.map((item) => {
                            if (item.id === id) {
                                return {
                                    ...item,
                                    qty: item.qty - 1,
                                    price: item.price - item.price / item.qty
                                }

                            }
                            return item
                        })
                    }
                }
                return item
            })
            setCart(items)
            localStorage.setItem('cart', JSON.stringify(items))
        } else if (op === 1) {
            const items = cart.map((item) => {
                if (item.id === store) {
                    console.log(item)
                    return {
                        ...item,
                        items: item.items.map((item) => {
                            if (item.id === id) {
                                return {
                                    ...item,
                                    qty: item.qty + 1,
                                    price: item.price + item.price / item.qty
                                }


                            }
                            return item
                        })
                    }

                }
                return item
            })
            setCart(items)
            localStorage.setItem('cart', JSON.stringify(items))
        }

    }
    const handleDelete = (id) => {
        const items = cart.map((item) => {
            if (item.id === store) {
                return {
                    ...item,
                    items: item.items.filter((item) => item.id !== id)
                }
            }
            return item
        })
        setCart(items)
        localStorage.setItem('cart', JSON.stringify(items))
        if (storeCart.items.length === 1) {
            handleClear()
            localStorage.setItem('cart', JSON.stringify(cart.filter((item) => item.id !== store)))
        }
    }

    return <>

        <Edit {...{ drawer, setDrawer, food }} />
        <Box className="bg-primary">
            <Title title="Cart" />
            <Paper elevation={1} sx={{
                margin: "20px !important",
                overflow: 'hidden',
                p: '1rem',
                rounded: '10px',
            }}>
                {
                    storeCart ? (
                        <Grid container spacing={0} sx={{ height: '100%' }} gap={2}>

                            <Grid item component="form" onSubmit={handleSubmit}
                                xs={12} sm={12} md={7}

                                sx={{

                                    height: {
                                        xs: undefined,
                                        md: "auto"
                                    },

                                }}
                            >
                                <Box justifyContent="flex-start">
                                    <Button sx={{ color: colors.grey[800], background: colors.red[500] + '!important' }}
                                        onClick={handleClear}
                                    >Clear</Button>
                                </Box>
                                <Box className="flex  justify-between items-center">
                                    <Typography my={1} variant="h3" fontWeight="bold" fontFamily="Nunito">Products</Typography>

                                </Box>
                                <Box
                                    className="w-full overflow-auto block "
                                >
                                    <List>
                                        {
                                            storeCart.items.map((item, index) => {
                                                const { name, price, details, options, qty } = item
                                                return (<Box key={index}>

                                                    <article className='flex justify-between gap-4 p-3 mt-8 rounded-lg shadow-lg'>
                                                        {/* image */}
                                                        <div className='flex-1'>
                                                            <img src={item.image} className='w-auto h-auto object-cover' />
                                                        </div>
                                                        {/* content */}
                                                        <div className='flex-[2]'>
                                                            <div className='mb-2'>
                                                                <p className='mb-1 text-Grayish-blue'>{options.optionName}</p>
                                                                <h1 className='font-[600] mb-1'>{name}</h1>
                                                                <p className=''>{price} ksh</p>
                                                            </div>
                                                            {/* buttons */}
                                                            <div className='flex justify-between mt-5 gap-6 w-[93%]'>
                                                                <div className='flex-[2] items-center flex justify-between'>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handleEdit(item.id, 0)}
                                                                        className='flex items-center justify-center w-8 h-8 rounded-[50%] bg-Grayish-blue'
                                                                    >
                                                                        <HiOutlineMinus />
                                                                    </button>
                                                                    <span>{qty}</span>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handleEdit(item.id, 1)}
                                                                        className='flex items-center justify-center w-8 h-8 rounded-[50%] bg-Grayish-blue'
                                                                    >
                                                                        <HiOutlinePlus />
                                                                    </button>
                                                                </div>
                                                                <div className='flex justify-end flex-1'>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handleDelete(item.id)}
                                                                        className='flex items-center text-white justify-center w-8 h-8 rounded-[50%] bg-error'
                                                                    >
                                                                        <AiOutlineDelete />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>

                                                </Box>)
                                            })
                                        }
                                        <ListItem className="w-full justify-end">
                                            <Typography className="font-bold" fontFamily="Atomic Age">Total: KSH. {total}</Typography>

                                        </ListItem>
                                    </List>
                                </Box>
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
                                        placeholder="Specify Your Block Number, Floor, Room Number"
                                    />
                                </Box>

                                <Box className="my-5  flex flex-col gap-2">
                                    <Typography className='text-xl ' fontFamily="Nunito">Other Details-optional</Typography>
                                    <Box
                                        component="textarea"
                                        name="details"
                                        sx={{
                                            width: "100%",
                                            outline: colors.teal[100],
                                            border: `1px solid ${colors.primary[900]}`,
                                            height: '100px',
                                            '$:focus': {
                                                outline: colors.teal[100],
                                            }
                                        }}
                                        className="resize-none rounded-md px-2 focus:border-teal-500 focus:border-2 "
                                        placeholder="Enter your elergies/or what you want to add to your order"
                                    />
                                </Box>

                                <LoadingButton loading={loading} loadingIndicator="Loading…" type="submit" className="w-full  text-white" sx={{ bgcolor: `${colors.red[500]} !important` }}>Order</LoadingButton>
                            </Grid>
                            <Grid item sx={{
                                bgcolor: colors.bg,
                                height: '100%',
                                overflow: "hidden",
                                padding: '1rem !important',

                                display: {
                                    xs: 'none',
                                    md: 'flex'
                                },
                                flexDirection: 'column',
                                height: {
                                    xs: undefined,
                                    md: "auto"
                                }

                            }}
                                md={4}
                                xs={12}
                                sm={12}

                            >
                                {storeCart.items.length > 0 && <CustomeStepper {...{ items: storeCart.items }} />}
                            </Grid>
                        </Grid>

                    ) : (<Box className="flex flex-col justify-center items-center">
                        <Typography fontFamily="Atomic Age" className="text-xl font-bold">Your Cart Is Empty</Typography>
                        <img src="/empty.png" className="h-auto max-h-[300px]" />

                    </Box>)
                }

            </Paper>


            <Toaster />
        </Box>;
    </>
};
export default Category
// import React, { useState, useEffect } from 'react';

// function HelloMonday() {
//     const [greeting, setGreeting] = useState('');

//     useEffect(() => {
//         const today = new Date();
//         const weekOfMonth = Math.ceil(today.getDate() / 7);
//         const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//         const month = months[today.getMonth()];

//         if (today.getDay() === 1) {
//             setGreeting(`Hello! Happy Monday! It's week ${weekOfMonth} of ${month}.`);
//         } else {
//             setGreeting('');
//         }
//     }, []);

//     return <div>{greeting}</div>;
// }

// export default HelloMonday;

// function deleteTop(stack, i) {
//     const x = stack;
//     let n = x.length;
//     const top = n - 1;
//     if (x[top] !== null) {
//         x.pop();
//         return x
//     } else {
//         console.log('stack full')
//         return x
//     }

// }
// function insert(stack, i) {
//     const x = stack;
//     let n = x.length;
//     const top = n - 1;
//     if (x[top] === null) {
//         x.push(i)
//         return x
//     } else {
//         console.log('stack full')
//         return x
//     }

// }
// const x = [1, 2, 4, 4, 2];
// console.log(insert(x, 1))


// const func = (arr, i) => {
//     const x = arr;
//     let n = x.length;

//     if (i >= n) {
//         console.log("i is greater than n");
//         return x;
//     }
//     let j = i;
//     while (!(j >= n)) {
//         if (j >= n - 1) {
//             x.pop()
//             return x
//         }
//         x[j] = x[j + 1];
//         j++;
//     }
//     return x;
// };
// console.log(func([1, 2, 3, 4, 5], 4))