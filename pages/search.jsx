import { Typography, Box, List, ListItem, Avatar, ListItemIcon, Rating } from "@mui/material";
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
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Store } from "@mui/icons-material";
const Stores = ({ flag }) => {
    const rowContainer = useRef();
    const { colors } = useGlobalProvider(0)
    const [scrollValue, setScrollValue] = useState(0);
    const { data, isLoading, error } = useBusinessQuery();

    return <div className="bg-primary">
        <Title title="Stores" subtitle="Search For  Stores && Foods" />
        <Box className="flex justify-center align-center gap-5 flex-col pb-7" sx={{ alignItems: 'center' }}>
            <Box className="flex justify-center align-center gap-5" sx={{ alignItems: 'center' }}>
                <Avatar src="/plate.png" />

                <Typography sx={{
                    fontFamily: "Roboto",
                    fontWeight: 500,
                    fontSize: "1.5rem",
                    mt: 1,
                }}  >Stores</Typography>
            </Box>
            <Typography fontWeight="bold" sx={{
                fontFamily: 'Nunito',
                alignSelf: "center",
                textAlign: "center",

                maxWidth: {
                    xs: '90%',

                }
            }}>
                You can search for your favorite stores and restaurants and order your favorite food from them, and you can also search for your favorite products and order them from the stores that sell them.
                click on view store to view store details like distance from you, rating, and order.
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
                <Search /><InputBase placeholder="What are you looking for"
                    sx={{
                        width: '100%',
                    }}
                />
                <Button
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



        </div>;


    </div>;
};

Stores.layout = true
export default Stores;
