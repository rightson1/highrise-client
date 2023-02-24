import Chip from "@mui/material/Chip";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import { useGlobalProvider } from "../../../utils/themeContext";
import { Box } from "@mui/system";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useRouter } from "next/router";
import Title from "../../../components/Title";
import { useOrders } from "../../../utils/orderContext";
import { format } from "timeago.js";
import { useSingleBusinessQuery } from "../../../utils/hooks/useBusiness";
import Skeleton from "@mui/material/Skeleton";
import List from "@mui/material/List";
import { useOrderQuery } from "../../../utils/hooks/useOrder";
import Header from "../../../components/Head";

const Orders = () => {
    const router = useRouter()
    const { store } = router.query
    const { data: orders, isLoading } = useOrderQuery()

    const { colors } = useGlobalProvider();
    return <Grid className="bg-primary p-2  ">
        <Title title="Orders" subtitle="All Your Order" />
        <Header title="Orders" desc="All Your Order" />
        <Grid item component={Paper} elevation={2} className="bg-primary p-1 pt-3 pb-10 min-h-screen">


            <List>




                {
                    isLoading ? (<Box className="flex flex-col items-center">
                        <Skeleton variant="rectangular" width='95vh' height={118} />
                        <Skeleton variant="rectangular" width='95vh' height={118} />
                        <Skeleton variant="rectangular" width='95vh' height={118} />
                        <Skeleton variant="rectangular" width='95vh' height={118} />
                    </Box>
                    ) :
                        orders?.length > 0 ? (<>
                            <Box className="flex justify-between p-4 px-2 items-center">
                                <Typography variant="h3" className="text-grey"
                                    fontFamily="Nunito"
                                >
                                    Orders
                                </Typography>

                            </Box>
                            <ListItem className="flex items-center justify-between">
                                <Typography variant="h5" className="text-grey"
                                    fontFamily="Nunito"
                                >
                                    Date
                                </Typography>
                                <Typography variant="h5" className="text-grey"
                                    fontFamily="Nunito"
                                >
                                    Status
                                </Typography>
                                <Typography variant="h5" className="text-grey"
                                    fontFamily="Nunito"
                                >
                                    Action
                                </Typography>
                            </ListItem>
                            {orders.filter(order => !order.deleted).map((order, index) => (


                                <ListItem key={index}
                                    className="flex justify-between items-center"
                                >




                                    <Typography>
                                        {format(order.createdAt)}
                                    </Typography>

                                    <Chip
                                        sx={{
                                            pl: "4px",
                                            pr: "4px",
                                            backgroundColor: order.status == 'Delivered' ? colors.teal[500] : colors.orange[300],
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={order.status}
                                    ></Chip>


                                    <Chip
                                        onClick={() => router.push(`/stores/${order.business}/order/${order._id}`)}
                                        sx={{
                                            px: 1,
                                            backgroundColor: colors.yellow[500],
                                            color: "#fff",
                                        }}
                                        size="medium"
                                        label="View"
                                    ></Chip>



                                </ListItem>
                            ))}
                        </>)

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
};

export default Orders;
