import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Rating from '@mui/material/Rating';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React, { useEffect, useRef, useState } from "react";
import { useGlobalProvider } from "../../../utils/themeContext";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Search from "@mui/icons-material/Search";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { InputBase } from "@mui/material";
import Title from "../../../components/Title";
import { useBusinessQuery } from "../../../utils/hooks/useBusiness";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useRouter } from "next/router";
import { useGetItemNamesStore, useItemsQuery, useSearchedItemsQuery } from "../../../utils/hooks/useItems";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
const Stores = ({ flag }) => {
    const rowContainer = useRef();
    const router = useRouter()
    const { store } = router.query
    const { colors, baseUrl } = useGlobalProvider(0)
    const { data, isLoading, error } = useGetItemNamesStore(store)
    const [filteredData, setFilteredData] = useState([])
    const [searchTerm, setSearchTerm] = useState(null);
    const [loading, setLoading] = useState(false)
    const handleClicked = (value) => {
        setLoading(true)
        axios.get(`${baseUrl}/api/items/store/${store}?search=${searchTerm}`).then((res) => {
            setFilteredData(res.data)
            setLoading(false)
        }).catch((e) => {
            console.log(e)
            setLoading(false)
        })

    }

    return <div className="bg-primary min-h-screen">
        <Box className="flex justify-center align-center gap-5 flex-col pb-7" sx={{ alignItems: 'center' }}>

            <Box display="flex" bgcolor={colors.looking} className="justify-center items-center p-2 "
                sx={{
                    width: {
                        xs: '90%',
                        sm: '90%',
                        md: '70%'
                    }
                }}
            >
                <Search />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    onChange={(e, value) => {
                        setSearchTerm(value?.name)
                    }}
                    options={data || []}
                    getOptionLabel={(option) => option.name}
                    loading={isLoading}

                    sx={{ width: "110%" }}
                    renderInput={(params) => <TextField
                        onChange={(e) => setSearchTerm(e.target.value)}
                        {...params} placeholder="Search for stores" sx={{
                            width: '100%',
                            "& .MuiOutlinedInput-root": {
                                padding: '0rem',
                                "& fieldset": {
                                    border: 'none'
                                },
                            }
                        }} />}
                />
                <Button
                    onClick={handleClicked}
                    sx={{
                        bgcolor: colors.find + '!important',

                    }}
                >
                    <SearchOutlinedIcon sx={{
                        color: colors.grey[100],
                        width: '5rem'
                    }} />
                </Button>

            </Box>

        </Box>


        <div

            ref={rowContainer}

            className={`w-full flex gap-3  my-4 py-2 scroll-smooth  ${false
                ? "overflow-x-scroll scrollbar-none "
                : "overflow-x-hidden flex-wrap justify-center"
                }`}
        >
            {
                loading ? ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {

                    return (
                        <Box
                            key={index}
                            className="md:max-w-[300px] min-w-[250px]
            bg-cardOverlay rounded-lg py-2 px-4    hover:drop-shadow-lg flex flex-col items-center justify-evenly relative" >
                            <Skeleton variant="rectangular" width={210} height={118} />
                            <Skeleton variant="text" width={210} />
                            <Skeleton variant="text" width={210} />
                            <Skeleton variant="text" width={210} />
                        </Box>
                    )
                })
                ) : filteredData?.length > 0 ? filteredData.map((item, index) => {


                    return (

                        <Box
                            key={index}


                        >
                            <Card
                                onClick={() => router.push(`/stores/${item.business}/item/${item._id}`)}
                                className="md:max-w-[300px] min-w-[250px]  h-[250px]
         bg-cardOverlay rounded-lg py-2 px-4  cursor-pointer  hover:drop-shadow-lg flex flex-col items-center justify-evenly relative" >

                                <CardMedia
                                    component="img"
                                    alt={item.name}
                                    height="100"
                                    sx={{
                                        maxHeight: '140px !important',
                                        objectFit: 'contain !important',
                                        p: 1,

                                    }}

                                    image={item.image}
                                />
                                <CardContent sx={{
                                    display: 'flex',
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    flexDirection: 'column'
                                }}>
                                    <Typography gutterBottom variant="h5" component="div" sx={{
                                        fontFamily: 'Nunito',
                                        fontWeight: 700,
                                        fontSize: '1.2rem',
                                    }}>
                                        {item.name}
                                    </Typography>
                                    <Typography gutterBottom sx={{
                                        fontFamily: 'Nunito',
                                        fontWeight: 700,
                                        fontSize: '.8rem',
                                        textAlign: 'center'
                                    }}>

                                        {item.status ? 'Available' : 'Not Available'}
                                    </Typography>

                                    <Typography sx={{ color: colors.red[500] }}>ksh {item.price ? item.price :
                                        item?.sizes?.length > 0 && item?.sizes?.reduce((prev, curr) => prev.price > curr.price ? prev : curr)?.price}</Typography>
                                    <Typography></Typography>
                                </CardContent>

                            </Card>


                        </Box>

                    )
                }

                ) : <Box
                    className="md:max-w-[300px] min-w-[250px] h-[200px]
            bg-cardOverlay rounded-lg py-2 px-4    hover:drop-shadow-lg flex flex-col items-center justify-evenly relative" >
                    <Typography variant="h5" sx={{
                        fontFamily: 'Nunito',
                        fontWeight: 700,
                        fontSize: '1.2rem',
                    }}>
                        {data?.length == 0 ? 'No items found' : 'Search Items'}
                    </Typography>
                </Box>

            }


        </div>;


    </div>;
};

export default Stores;
