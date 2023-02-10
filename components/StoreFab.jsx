import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { useGlobalProvider } from '../utils/themeContext';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Badge } from '@mui/material';
import ReceiptLongOutlined from '@mui/icons-material/ReceiptLongOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import { useRouter } from 'next/router';
import { useSingleBusinessQuery } from '../utils/hooks/useBusiness';


export default function StoreFab() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { colors } = useGlobalProvider();
    const router = useRouter();
    const { store } = useRouter().query;
    const { data: business } = useSingleBusinessQuery(store)
    const actions = [
        { icon: <HomeOutlinedIcon />, name: business?.name, link: `/stores/${store}` },
        { icon: <ShoppingCartOutlinedIcon />, name: 'Cart', link: `/stores/${store}/carts` },
        { icon: <ReceiptLongOutlined />, name: 'Orders', link: `/stores/${store}/orders` },

    ];
    return (
        business && <Box className="z-10"
            sx={{

                position: 'fixed', bottom: 40, right: 16,
                "& .MuiSpeedDial-fab": {
                    backgroundColor: colors.find,
                    "&:hover": {
                        backgroundColor: colors.find
                    }
                },
                "& .MuiSpeedDialAction-staticTooltipLabel": {
                    backgroundColor: colors.find,
                    width: 100,
                    color: colors.looking,
                    fontSize: '13px',
                    "&:hover": {
                        backgroundColor: colors.red[500],
                        color: colors.looking,
                    }
                },
                "& .MuiSpeedDialAction-fab": {
                    backgroundColor: colors.find,
                    color: colors.looking,
                    "&:hover": {
                        backgroundColor: colors.red[700],
                        color: colors.looking,
                    }
                }


            }}
        >
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                sx={{


                }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        onClick={() => {
                            router.push(action.link)
                            handleClose
                        }}
                        tooltipTitle={action.name}
                        tooltipOpen

                    />
                ))}
            </SpeedDial>
        </Box>

    );
}