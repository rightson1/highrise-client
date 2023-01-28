import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useMediaQuery } from "@mui/material";
import { useGlobalProvider } from '../utils/themeContext';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Badge } from '@mui/material';
import { ReceiptLongOutlined } from '@mui/icons-material';
import { useRouter } from 'next/router'
export default function StoreBottom() {
    const { colors } = useGlobalProvider()
    const isMobileSmall = useMediaQuery("(max-width: 900px)")
    const [value, setValue] = React.useState('recents');
    const router = useRouter();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        isMobileSmall && (<Paper sx={{
            position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 10,


        }} elevation={1}

        >
            <BottomNavigation
                showLabels
                sx={{
                    bgcolor: "rgba(245,242,242,1) !important",
                    height: '50px',
                    '& .Mui-selected': {
                        color: colors.find + " !important",
                    }
                }}
                className="bg-primary"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction onClick={() => router.push(`/stores/1223`)} label="Home" icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction onClick={() => router.push(`/stores/1222/chat`)} label="Live Chat" icon={<ChatBubbleOutlineOutlinedIcon />} />
                <BottomNavigationAction onClick={() => router.push(`/stores/1223/carts`)} label="Cart" icon={<Badge badgeContent={4} color="warning"><ShoppingCartOutlinedIcon /></Badge>} />
                <BottomNavigationAction onClick={() => router.push(`/stores/2232/1orders`)} label="Orders" icon={<Badge badgeContent={1} ><ReceiptLongOutlined /></Badge>} />

            </BottomNavigation>
        </Paper>)

    );
}