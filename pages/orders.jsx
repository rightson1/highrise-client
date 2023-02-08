import { Avatar, Chip, Fab, Grid, ListItem, ListItemIcon, ListItemText, Skeleton } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
import { Box } from "@mui/system";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useRouter } from "next/router";
import Title from "../components/Title";
import { useOrders } from "../utils/orderContext";
import { format } from "timeago.js";
import { useBusinessQuery } from "../utils/hooks/useBusiness";
const Orders = () => {
    const router = useRouter()
    const { orders } = useOrders();
    const { colors } = useGlobalProvider();
    const { data: businesses } = useBusinessQuery();
    return orders ? <Grid className="bg-primary p-2 ">
        <Title title="Orders" subtitle="All Your Order" />
        <Grid item component={Paper} elevation={2} className="bg-primary p-1 pt-3 pb-10">

            <Box className="flex justify-between p-4 px-2 items-center">
                <Typography variant="h3" className="text-grey"
                    fontFamily="Atomic Age"
                >
                    Orders
                </Typography>

            </Box>
            <Box className="w-full justify-between items-center flex ">
                <p className="">
                </p>
            </Box>
            <TableContainer component={Paper} className="bg-primary " elevation={0}>
                <Table sx={{ minWidth: 400 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h6">
                                    Created At
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">
                                    Business
                                </Typography>
                            </TableCell>

                            <TableCell>
                                <Typography variant="h6">
                                    Status
                                </Typography>
                            </TableCell>

                            <TableCell>
                                <Typography variant="h6">
                                    View
                                </Typography>
                            </TableCell>



                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order, index) => (
                            <TableRow key={index}

                            >
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",

                                        }}
                                    >
                                        {format(order.createdAt)}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {businesses?.find(business => business._id == order.business)?.name}
                                    </Typography>
                                </TableCell>
                                <TableCell>
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
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        onClick={() => router.push(`/stores/${store}/order/${order._id}`)}
                                        sx={{
                                            px: 1,
                                            backgroundColor: colors.yellow[500],
                                            color: "#fff",
                                        }}
                                        size="medium"
                                        label="View"
                                    ></Chip>
                                </TableCell>


                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell colSpan={2}>Click View To Order details</TableCell>
                            <TableCell>Scroll left</TableCell>
                        </TableRow>
                    </TableBody>

                </Table>
            </TableContainer>

        </Grid>
        <Grid item>



        </Grid>
    </Grid> :
        <Skeleton width="100vw" height={500}>

        </Skeleton>
}

Orders.layout = true;
export default Orders;
