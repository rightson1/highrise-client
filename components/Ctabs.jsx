import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import TextMobileStepper from './MStepper';
import { useGlobalProvider } from '../utils/themeContext';
import Text from './Text';



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ item }) {
    const { colors } = useGlobalProvider()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    if (item) {

        return (
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} my={2}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                        TabIndicatorProps={{

                        }}
                        indicatorColor="red"
                        sx={{
                            '& .MuiButtonBase-root': {
                                color: colors.grey[100],

                            },

                        }}
                    >
                        <Tab label="Order Details" {...a11yProps(0)} sx={{
                            color: `${value === 0 && colors.teal[200]} !important`

                        }} />
                        <Tab label="Live Chat" {...a11yProps(1)} sx={{
                            color: `${value === 1 && colors.teal[200]} !important`
                        }} />
                        <Tab label="Edit" {...a11yProps(2)} disabled sx={{
                            color: `${value === 2 && colors.teal[200]} !important`
                        }} />
                    </Tabs>
                </Box>

                {
                    value === 0 ? (<>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                letterSpacing: '2px'
                            }}
                        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi facere eaque labore laborum et perferendis tempore sit fugit deleniti possimus cupiditate dolorem consequatur iure incidunt molestias, repudiandae vero adipisci nemo!</Typography>
                    </>) : value === 1 ? (<>
                        <Text />
                    </>) : (<>

                    </>)
                }

            </Box>
        )
    } else return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} my={2}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{
                    '& .MuiTab-root': {
                        color: colors.grey[100],
                        border: 'none !important'
                    }
                }}>
                    <Tab label="Description" {...a11yProps(0)} sx={{
                        color: value == 0 ? colors.orange[500] : colors.grey[100] + '!important',

                    }} />
                    <Tab label="Reviews" {...a11yProps(1)} />
                    <Tab label="Edit" {...a11yProps(2)} />
                </Tabs>
            </Box>

            {
                value === 0 ? (<>
                    <Typography
                        sx={{
                            fontSize: '16px',
                            letterSpacing: '2px'
                        }}
                    >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi facere eaque labore laborum et perferendis tempore sit fugit deleniti possimus cupiditate dolorem consequatur iure incidunt molestias, repudiandae vero adipisci nemo!</Typography>
                </>) : value === 1 ? (<>
                    <TextMobileStepper />
                </>) : (<>

                </>)
            }

        </Box>
    );
}