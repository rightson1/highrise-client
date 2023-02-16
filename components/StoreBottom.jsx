import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useMediaQuery } from "@mui/material";
import { useGlobalProvider } from '../utils/themeContext';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Badge } from '@mui/material';
import ReceiptLongOutlined from '@mui/icons-material/ReceiptLongOutlined';
import PropaneOutlinedIcon from '@mui/icons-material/PropaneOutlined';
import { useRouter } from 'next/router'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
export default function StoreBottom() {
    const { colors, cart, animate } = useGlobalProvider()
    const isMobileSmall = useMediaQuery("(max-width: 900px)")
    const [value, setValue] = React.useState('recents');
    const { store } = useRouter().query;
    const [shouldAnimate, setShouldAnimate] = React.useState(false)
    const cartLength = cart.find(item => item.id === store)?.items?.length
    useEffect(() => {
        if (animate.find(item => item === store)) {
            setShouldAnimate(false)
        } else {
            setShouldAnimate(true)
        }
    }, [animate])

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


        >
            <AnimatedBottom

                showLabels
                sx={{

                    height: '50px',
                    '& .Mui-selected': {
                        color: colors.find + " !important",
                    }
                }}
                className="bg-primary relative"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >

                <BottomNavigationAction className='' onClick={() => router.push(`/stores/${store}`)} label="Home" icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction onClick={() => router.push(`/stores/${store}/chat`)} label="Contact Us" icon={<CallOutlinedIcon />} />
                <BottomNavigationAction className='' onClick={() => router.push(`/stores/${store}/carts`)} label="About Us" icon={<InfoOutlinedIcon />} />
                <BottomNavigationAction label="Orders" onClick={() => router.push(`/orders`)} icon={<ReceiptLongOutlined />} />


            </AnimatedBottom>

        </AnimatedPaper>)

    );
}