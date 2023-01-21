import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArchiveIcon from '@mui/icons-material/Archive';
import { useMediaQuery } from "@mui/material";
import { useGlobalProvider } from '../utils/themeContext';
export default function LabelBottomNavigation() {
    const { colors } = useGlobalProvider()
    const isMobileSmall = useMediaQuery("(max-width: 600px)")
    const [value, setValue] = React.useState('recents');

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
                className="bottom"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
            </BottomNavigation>
        </Paper>)

    );
}