import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useMediaQuery } from "@mui/material";
import { useGlobalProvider } from '../utils/themeContext';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Badge } from '@mui/material';
import { ReceiptLongOutlined } from '@mui/icons-material';
import { useRouter } from 'next/router'
import GasMeterOutlinedIcon from '@mui/icons-material/GasMeterOutlined';
import { useOrders } from '../utils/orderContext';
export default function StoreBottom() {
    const { colors } = useGlobalProvider()
    const isMobileSmall = useMediaQuery("(max-width: 800px)")
    const [value, setValue] = React.useState('recents');
    const { orders } = useOrders();
    const router = useRouter();
    const { store } = router.query
    const path = router.pathname.split('/')[2]
    const after = path === "[store]" && router.pathname.split('/')[3]

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
                className=""
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction onClick={() =>
                    after ? router.push(`/stores/${store}`) : router.push(`/`)
                } label="Home" icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction onClick={() => router.push(`/search`)} label="Stores" icon={<StorefrontOutlinedIcon />} />
                <BottomNavigationAction onClick={() => router.push(`/orders`)} label="Orders" icon={<ReceiptLongOutlined />} />
                {/* <BottomNavigationAction label="Gas & Water" onClick={() => router.push(`/gas`)} icon={<GasMeterOutlinedIcon />} /> */}

            </BottomNavigation>
        </Paper>)

    );
}
