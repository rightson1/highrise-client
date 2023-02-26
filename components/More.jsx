import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Rating from '@mui/material/Rating';
import React, { useRef } from "react";
import Button from '@mui/material/Button';
import { useRouter } from "next/router";
import { useGlobalProvider } from "../utils/themeContext";
import Foods from "./Foods";
import { useSingleItemQuery } from "../utils/hooks/useItems";
import { useCategoryQuery } from "../utils/hooks/useCategories";
const More = ({ flag, scrollValue, categories }) => {
    const rowContainer = useRef();
    const { colors } = useGlobalProvider(0)
    const router = useRouter()
    const { store } = router.query
    const { data: carts } = useCategoryQuery(store)

    return <Box className="py-12">
        <ListItem sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <ListItemIcon>
                <Avatar src="/plate.png" sx={{
                    width: "3rem",
                    height: "3rem"
                }} />
            </ListItemIcon>
            <Typography sx={{
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: "1.5rem",
            }}  >More</Typography>

        </ListItem>
        {carts?.map((cart, index) => {
            return <Box key={index}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    px: 2,

                }}>
                    <Button sx={{
                        bgcolor: colors.red[200] + " !important",
                        color: colors.grey[100] + " !important",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 1,
                    }}>{cart.name}
                        <Box component="img" src="/right.svg" sx={{
                            width: "1.4rem",
                            height: "1.4rem"
                        }} />
                    </Button>
                </Box>
                <Foods {...{ filter: cart.name }} />
            </Box>
        })}
    </Box>;
};

export default More;
