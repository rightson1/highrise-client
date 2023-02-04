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
import { motion } from 'framer-motion';
export default function StoreBottom() {
    const { colors, cart } = useGlobalProvider()
    const isMobileSmall = useMediaQuery("(max-width: 900px)")
    const [value, setValue] = React.useState('recents');
    const { store } = useRouter().query
    const cartLength = cart.find(item => item.id === store)?.items?.length

    const router = useRouter();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const AnimatedPaper = motion(Paper)
    const AnimatedBottom = motion(BottomNavigation)
    return (
        isMobileSmall && (<AnimatedPaper sx={{
            position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 10,


        }} elevation={1}
            initial={{
                y: 100, opacity: 0,

            }}
            animate={{
                y: 0, opacity: 1,
                transition: {
                    duration: 1,
                    ease: "easeInOut",
                }
            }}

        >
            <AnimatedBottom
                initial={{
                    backgroundColor: colors.redAccent[500]

                }}
                animate={{
                    backgroundColor: [colors.find, colors.bg, colors.primary[500], colors.find, colors.primary[500], colors.bg],
                    transition: {
                        duration: 2.7,
                        ease: "easeInOut",
                    }
                }}
                showLabels
                sx={{

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
                <BottomNavigationAction onClick={() => router.push(`/`)} label="Home" icon={<HomeOutlinedIcon />} />
                {/* <BottomNavigationAction onClick={() => router.push(`/stores/${store}/chat`)} label="Live Chat" icon={<ChatBubbleOutlineOutlinedIcon />} /> */}
                <BottomNavigationAction onClick={() => router.push(`/stores/${store}/carts`)} label="Cart" icon={<Badge badgeContent={cartLength} color="warning"><ShoppingCartOutlinedIcon /></Badge>} />
                <BottomNavigationAction onClick={() => router.push(`/stores/${store}/orders`)} label="Orders" icon={<Badge badgeContent={1} ><ReceiptLongOutlined /></Badge>} />

            </AnimatedBottom>

        </AnimatedPaper>)

    );
}