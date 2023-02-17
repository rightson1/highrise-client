import { Avatar, Chip, Fab, Grid, Box, Paper, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Title from "../../../../components/Title";
import { useGlobalProvider } from "../../../../utils/themeContext";
import Ctabs from "../../../../components/Ctabs"
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import { useOrders } from "../../../../utils/orderContext";
import { useRouter } from "next/router";
import { doc, deleteDoc } from "firebase/firestore";
import { Toaster, toast } from "react-hot-toast";
import { db } from "../../../../utils/firebase"
import axios from "axios";
import { useAuth } from "../../../../utils/authContext";
import { useOrderQuery, useUpdateOrder } from "../../../../utils/hooks/useOrder";
import { useSingleBusinessQuery } from "../../../../utils/hooks/useBusiness";
const Category = () => {

    const { colors, mode, baseUrl } = useGlobalProvider()
    const { data: orders, refetch } = useOrderQuery();
    const { id } = useRouter().query;
    const router = useRouter()
    const order = orders?.find(order => order._id === id);
    const theme = useTheme()
    const today = new Date().getDay()
    const { user, admin } = useAuth()
    const [open, setOpen] = useState(false);
    const { data: business } = useSingleBusinessQuery(order?.business)
    const { mutateAsync: updateOrder, isError, isSuccess } = useUpdateOrder();
    const handleDelete = () => {
        const deleteRef = doc(db, "orders", order.realId)
        const del = () => deleteDoc(deleteRef).then(() => {


            updateOrder({
                id,
                deleted: true,
                name: admin.displayName,
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
    useEffect(() => {
        if (isError) {
            toast.error("Error updating order")
        }
        if (isSuccess) {
            router.push(`/`)
        }
    }, [isError])
    return <Box className="bg-primary">
        <Title title="Orders" />
        <Box elevation={0} sx={{
            margin: {
                xs: ' 0 10px !important',
                md: "0 20px !important",
            },
            overflow: 'hidden',

            rounded: '10px',
        }}>
            {
                order ? <Grid container spacing={0} sx={{ height: '100%' }} gap={2}>

                    <Grid item
                        xs={12} sm={12} md={7}

                        sx={{

                            height: {
                                xs: undefined,
                                md: "70vh"
                            },

                        }}
                    >
                        <Box className="flex justify-between">
                            <Button sx={{ color: colors.grey[100], background: colors.red[300] + '!important' }}
                                onClick={() => {
                                    confirm("Are you sure you want to delete this order?") && handleDelete()
                                }}
                            >Cancel</Button>
                            <Button className="underline" onClick={() => router.push(`/stores/${order.business}`)} sx={{ color: colors.grey[100] }} background={colors.teal[300]}>{business?.name}</Button>
                        </Box>
                        <Box className="flex  justify-between items-center w-full  ">
                            <Typography my={1} variant="h3" fontWeight="bold" color={colors.orange[500]}>{order?.status}</Typography>
                            <div className="scroll-down rotate-[90deg] translate-y-[80px] -translate-x-6 md:hidden"></div>
                        </Box>
                        <TableContainer component={Paper} className="bg-primary" elevation={0} sx={{

                        }}>
                            <Table sx={{ minWidth: 400 }} aria-label="simple table">
                                <TableHead>

                                    <TableRow>
                                        <TableCell />
                                        <TableCell>

                                            <Typography variant="h6">
                                                Name
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6">
                                                Quantity
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6">
                                                Price
                                            </Typography>
                                        </TableCell>



                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {order?.items.map((product, index) => (
                                        <Box key={index}>
                                            <TableRow

                                            >
                                                <TableCell>
                                                    <IconButton
                                                        aria-label="expand row"
                                                        size="small"
                                                        onClick={() => setOpen(open === index ? null : index)}
                                                    >
                                                        {open === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                    </IconButton>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "15px",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        {product.name}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "15px",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        {product.qty}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "15px",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        {product.price}
                                                    </Typography>
                                                </TableCell>


                                            </TableRow>
                                            <TableRow>
                                                <Collapse className="w-full" sx={{ p: 2 }}
                                                    in={open === index} timeout="auto" unmountOnExit
                                                >
                                                    <Typography variant="h5" className="font-bold underline">Options</Typography>
                                                    <List>
                                                        {product.options.map((option, index) => {
                                                            return (
                                                                <ListItem key={index}>
                                                                    <Typography variant="h6" className="font-bold capitalize">{option.optionName}</Typography>
                                                                    <Typography variant="h6" className="font-bold">{option.price}</Typography>
                                                                </ListItem>
                                                            )
                                                        }
                                                        )
                                                        }
                                                    </List>


                                                </Collapse>
                                            </TableRow>
                                        </Box>
                                    ))
                                    }
                                </TableBody>

                            </Table>

                        </TableContainer>

                    </Grid>

                    <Grid item sx={{
                        height: '100%',
                        overflow: "hidden",
                        padding: '1rem !important',
                        display: 'flex',
                        flexDirection: 'column',
                        height: {
                            xs: undefined,
                            md: "70vh"
                        }

                    }}
                        md={4}
                        xs={12}
                        sm={12}

                    >


                        <Typography variant="h6" className="font-bold capitalize">Total</Typography>
                        <Typography>{order.total} Ksh</Typography>


                        {
                            order.details && <>
                                <Typography variant="h6" className="font-bold capitalize">Order Details</Typography>
                                <Typography>{order.details}</Typography>
                            </>
                        }
                        <Typography variant="h6" className="font-bold capitalize">Location Details</Typography>
                        <Typography>{order.location}</Typography>

                    </Grid>

                    {/* <Grid item sx={{
                    height: '100%',
                    overflow: "hidden",
                    padding: '1rem !important',
                    display: 'flex',
                    flexDirection: 'column',
                    height: {
                        xs: undefined,
                        md: "70vh"
                    }

                }}
                    md={4}
                    xs={12}
                    sm={12}

                >
                    <Box sx={{
                        flexGrow: 1.


                    }}>
                        <Paper
                            square
                            elevation={0}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: 50,
                                pl: 2,
                                bgcolor: 'transparent',

                            }}
                        >
                            <Typography>{images[activeStep].label}</Typography>
                        </Paper>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {images.map((step, index) => (
                                <div key={index}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                            component="img"
                                            sx={{
                                                height: 255,
                                                display: 'block',

                                                overflow: 'hidden',
                                                width: '100%',
                                                objectFit: 'contain'
                                            }}

                                            src={step.imgPath}
                                            alt={step.label}
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            sx={{
                                bgcolor: 'transparent',
                                "& .MuiMobileStepper-dotActive ": {
                                    bgcolor: colors.orange[500] + '!important',

                                }
                            }}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    sx={{ color: colors.orange[100] }}
                                    disabled={activeStep === maxSteps - 1}
                                >
                                </Button>
                            }
                            backButton={
                                <Button
                                    sx={{ color: colors.orange[100] }}
                                    size="small" onClick={handleBack} disabled={activeStep === 0}>

                                </Button>
                            }
                        />
                    </Box>
                </Grid> */}
                </Grid>

                    : <Skeleton width="100%" height={300}></Skeleton>
            }
        </Box>
        {/* <Paper
            elevation={10} sx={{
                margin: "20px !important",
                overflow: 'hidden',
                p: '1rem',
                rounded: '10px',
            }}
        >

            <Ctabs item={true} />

        </Paper> */}

        <Toaster />
    </Box>;
};
export default Category;
