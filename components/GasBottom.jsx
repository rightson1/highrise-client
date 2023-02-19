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
import { useSingleBusinessQuery } from '../utils/hooks/useBusiness';
import FastfoodIcon from '@mui/icons-material/Fastfood';
export default function GasBottom() {
    const { colors, cart, animate } = useGlobalProvider()
    const isMobileSmall = useMediaQuery("(max-width: 900px)")
    const [value, setValue] = React.useState('recents');
    const { id } = useRouter().query;
    const { data: item } = useSingleBusinessQuery(id);

    const router = useRouter();
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
                className="bg-bgEn relative"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >

                <BottomNavigationAction className='' onClick={() => router.push(`/gas`)} label="Home" icon={<HomeOutlinedIcon />} />
                {/* <BottomNavigationAction onClick={() => router.push(`/stores/${store}/chat`)} label="Contact Us" icon={<CallOutlinedIcon />} /> */}
                <BottomNavigationAction className='' onClick={() => router.push(`/gas/orders`)} label="Orders" icon={<ReceiptLongOutlined />} />
                <BottomNavigationAction label="Foodie" onClick={() => router.push(`/`)} icon={<FastfoodIcon />} />


            </AnimatedBottom>

        </AnimatedPaper>)

    );
}