import { Typography, Box, List, ListItem, Avatar, ListItemIcon, Rating, Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Search from "@mui/icons-material/Search";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { InputBase } from "@mui/material";
import Title from "../components/Title";
import { useBusinessQuery } from "../utils/hooks/useBusiness";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useRouter } from "next/router";
import { useItemsQuery, useSearchedItemsQuery } from "../utils/hooks/useItems";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import Header from "../components/Head";
const Stores = ({ flag }) => {
    const rowContainer = useRef();
    const router = useRouter()
    const { colors, baseUrl } = useGlobalProvider(0)
    const { data, isLoading, error } = useItemsQuery()
    const [filteredData, setFilteredData] = useState()
    const [completed, setCompleted] = useState(false)
    const [searchTerm, setSearchTerm] = useState(null);
    const [loading, setLoading] = useState(false)
    const { data: businesses } = useBusinessQuery("foods");
    const handleClicked = (value) => {
        setLoading(true)
        axios.get(`${baseUrl}/api/items/search?search=${searchTerm}`).then((res) => {
            setFilteredData(res.data)
            console.log(data)
            setLoading(false)
        }).catch((e) => {
            console.log(e)
            setLoading(false)
        })

    }
    return <div className="bg-primary min-h-screen">
        <Header title="Search For Foods" desc="Search for all foods in highrise cannan  hotels" />
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
                    onChange={(e, value) => setSearchTerm(value?.name)}
                    options={data || []}
                    getOptionLabel={(option) => option.name}
                    loading={isLoading}

                    sx={{ width: "110%" }}
                    renderInput={(params) => <TextField
                        onChange={(e) => setSearchTerm(e.target.value)}
                        {...params} placeholder="Search for foods" sx={{
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

            className={`w-full flex gap-3  my-4 py-2 scroll-smooth  ${!flag
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
                ) : filteredData?.length > 0 ?

                    filteredData?.map((item, index) => {
                        const business = businesses?.find(business => business._id === item.business)

                        return (

                            <Box
                                key={index}


                            >
                                <Card
                                    onClick={() => router.push(`/stores/${item.business}`)}
                                    className="md:max-w-[300px] min-w-[250px]  h-[250px]
         bg-cardOverlay rounded-lg py-2 px-4  cursor-pointer  hover:drop-shadow-lg flex flex-col items-center justify-evenly relative" >

                                    <CardMedia
                                        component="img"
                                        alt={item.name}
                                        height="100"
                                        c sx={{
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
                                            Available In {business?.name}
                                        </Typography>
                                        <Typography sx={{ color: colors.red[500] }}>ksh {item.price ? item.price :
                                            item?.sizes?.length > 0 && item?.sizes?.reduce((prev, curr) => prev.price > curr.price ? prev : curr)?.price}</Typography>
                                        <Typography></Typography>
                                    </CardContent>

                                </Card>


                            </Box>

                        )
                    }

                    ) :
                    <Box
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


Stores.layout = true
export default Stores;
