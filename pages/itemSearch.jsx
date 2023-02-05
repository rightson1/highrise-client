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
import { useRouter } from "next/router";
import { useItemsQuery, useSearchedItemsQuery } from "../utils/hooks/useItems";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
const Stores = ({ flag }) => {
    const rowContainer = useRef();
    const router = useRouter()
    const { colors, baseUrl } = useGlobalProvider(0)
    const { data, isLoading, error } = useItemsQuery()
    const [filteredData, setFilteredData] = useState()
    const [completed, setCompleted] = useState(false)
    const [searchTerm, setSearchTerm] = useState(null);
    const [loading, setLoading] = useState(false)
    const handleClicked = () => {
        setLoading(true)
        axios.get(`${baseUrl}/api/items/search?search=${searchTerm}`).then((res) => {
            setFilteredData(res.data)
            setLoading(false)
        }).catch((e) => {
            console.log(e)
            setLoading(false)
        })

    }
    return <div className="bg-primary">
        <Title title="Search" subtitle="Search For  Foods " />
        <Box className="flex justify-center align-center gap-5 flex-col pb-7" sx={{ alignItems: 'center' }}>
            <Box className="flex justify-center align-center gap-5" sx={{ alignItems: 'center' }}>
                <Avatar src="/plate.png" />

                <Typography sx={{
                    fontFamily: "Roboto",
                    fontWeight: 500,
                    fontSize: "1.5rem",
                    mt: 1,
                }}  >Foods</Typography>
            </Box>
            <Typography fontWeight="bold" sx={{
                fontFamily: 'Nunito',
                alignSelf: "center",
                textAlign: "center",

                maxWidth: {
                    xs: '90%',

                }
            }}>
                Search for food items
            </Typography>
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
                ><ArrowRightAltIcon sx={{
                    color: colors.grey[100],
                    width: '5rem'
                }} /></Button>

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
                ) : filteredData?.map((item, index) => (

                    <Box
                        key={index}


                    >
                        <Card className="md:max-w-[300px] min-w-[250px] 
         bg-cardOverlay rounded-lg py-2 px-4    hover:drop-shadow-lg flex flex-col items-center justify-evenly relative" >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="100"
                                width="100%"
                                sx={{
                                    maxHeight: '140px !important',
                                    width: '100% !important',
                                    objectFit: 'cover !important',
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
                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="large" />
                                <Typography gutterBottom sx={{
                                    fontFamily: 'Nunito',
                                    fontWeight: 700,
                                    fontSize: '.8rem',
                                    textAlign: 'center'
                                }}>
                                    {item.desc}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{
                                display: 'flex',
                                justifyContent: "space-between",
                                width: '100%'
                            }}>
                                <Button size="small" sx={{
                                    color: `${colors.grey[100]} !important`
                                }}>Ksh {item.price}</Button>
                                <Button
                                    onClick={() => router.push(`/stores/${item.business}`)}
                                    size="small" sx={{
                                        color: `${colors.grey[100]} !important`,
                                        backgroundColor: `${colors.red[100]} !important`,

                                    }}>View Store</Button>
                            </CardActions>
                        </Card>

                    </Box>

                ))
            }


        </div>;


    </div>;
};


Stores.layout = true
export default Stores;
