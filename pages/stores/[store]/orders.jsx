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
const Orders = () => {
    const router = useRouter()
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const { colors } = useGlobalProvider();
    return <Grid className="bg-primary p-2 ">
        <Title title="Orders" subtitle="All Your Order" />
        <Grid item component={Paper} elevation={2} className="bg-primary p-1">

            <Box className="flex justify-between p-4 px-2 items-center">
                <Typography variant="h3" className="text-grey"
                    fontFamily="Atomic Age"
                >
                    Orders
                </Typography>
                <FormControl sx={{
                    m: 1, minWidth: 120,


                }} size="small">
                    <InputLabel id="demo-select-small">Month</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Age"
                        className="no-border"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Jan</MenuItem>
                        <MenuItem value={20}>Feb</MenuItem>
                        <MenuItem value={30}>March</MenuItem>
                    </Select>
                </FormControl>

            </Box>
            <Box className="w-full justify-between items-center flex ">
                <p className="">
                </p>

                <Box className="items-center flex md:hidden  italic text-[10px]">
                    <Typography>Scroll</Typography> <ArrowRightAltOutlinedIcon className=" text-2xl text-black" />
                </Box>
            </Box>
            <TableContainer component={Paper} className="bg-primary " elevation={0}>
                <Table sx={{ minWidth: 400 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h6">
                                    Order
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
                        {images.map((product, index) => (
                            <TableRow key={index}

                            >
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",

                                        }}
                                    >
                                        {product.label}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            pl: "4px",
                                            pr: "4px",
                                            backgroundColor: product.status == 'Delivered' ? colors.teal[500] : colors.orange[300],
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={product.status}
                                    ></Chip>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        onClick={() => router.push('/stores/123/order/1233')}
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
                                    <Fab src="/avatar2.jpeg"
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
                        </TableRow>
                    </TableBody>

                </Table>
            </TableContainer>

        </Grid>
        <Grid item>



        </Grid>
    </Grid>
};
const images = [
    {
        label: '#od102',
        store: 'Kilimani',
        imgPath:
            '/img/c4.png',
        quantity: 1,
        price: 200,
        status: 'Pending',
    },

    {
        label: '#od102',
        store: "Mesh",
        imgPath:
            '/img/d1.png', quantity: 1,
        price: 180,
        status: 'Delivered'
    },
    {
        status: 'Pending',
        label: '#od102',
        store: "Rightson Eats",
        imgPath:
            '/img/i7.png', quantity: 1,
        price: 305,
    },
    {
        label: '#od102',
        store: "Adum",
        status: 'Pending',

        imgPath:
            '/img/d8.png',
        quantity: 2,
        price: 220,
    },
];
export default Orders;
