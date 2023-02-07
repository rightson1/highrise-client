import { Avatar, Chip, Fab, Grid, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useGlobalProvider } from "../../../utils/themeContext";
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
import Title from "../../../components/Title";
import { useOrders } from "../../../utils/orderContext";
import { format } from "timeago.js";
import { useSingleBusinessQuery } from "../../../utils/hooks/useBusiness";
import Skeleton from "@mui/material/Skeleton";
const Orders = () => {
    const router = useRouter()
    const { store } = router.query
    const { orders } = useOrders();
    const { colors } = useGlobalProvider();
    const { data: business } = useSingleBusinessQuery(store)
    return orders ? <Grid className="bg-primary p-2 ">
        <Title title="Orders" subtitle={`All Your ${business?.name ? business.name : ''} Orders`} />
        <Grid item component={Paper} elevation={2} className="bg-primary p-1">

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
                                    Status
                                </Typography>
                            </TableCell>

                            <TableCell>
                                <Typography variant="h6">
                                    View
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">
                                    Delete
                                </Typography>
                            </TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.filter((order) => order.business === store).map((order, index) => (
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
                                <TableCell>
                                    <Fab
                                        size="small"
                                        sx={{
                                            px: 1,
                                            backgroundColor: colors.yellow[500],
                                            color: "#fff",
                                            zIndex: '4',
                                        }}

                                    >
                                        <DeleteOutlineIcon
                                            sx={{
                                                color: colors.red[500],
                                            }}
                                        />
                                    </Fab>
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
};

export default Orders;
