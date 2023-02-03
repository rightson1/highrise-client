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
import { Toaster } from 'react-hot-toast';
export default function StoreBottom() {
    const { colors } = useGlobalProvider()
    const isMobileSmall = useMediaQuery("(max-width: 900px)")
    const [value, setValue] = React.useState('recents');
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
                y: 100, opacity: 0, backgroundColor: colors.redAccent[500]

            }}
            animate={{
                y: 0, opacity: 1, backgroundColor: [colors.bg, colors.redAccent[500], colors.bg],
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
                    backgroundColor: [colors.bg, colors.find, colors.bg],
                    transition: {
                        duration: 4,
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
                <BottomNavigationAction onClick={() => router.push(`/stores/1223`)} label="Home" icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction onClick={() => router.push(`/stores/1222/chat`)} label="Live Chat" icon={<ChatBubbleOutlineOutlinedIcon />} />
                <BottomNavigationAction onClick={() => router.push(`/stores/1223/carts`)} label="Cart" icon={<Badge badgeContent={4} color="warning"><ShoppingCartOutlinedIcon /></Badge>} />
                <BottomNavigationAction onClick={() => router.push(`/stores/2232/orders`)} label="Orders" icon={<Badge badgeContent={1} ><ReceiptLongOutlined /></Badge>} />

            </AnimatedBottom>
            <Toaster />
        </AnimatedPaper>)

    );
}