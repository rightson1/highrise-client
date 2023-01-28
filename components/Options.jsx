import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useGlobalProvider } from '../utils/themeContext';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function Options() {
    const theme = useTheme();
    const { colors } = useGlobalProvider()
    const [personName, setPersonName] = React.useState([]);
    console.log(personName)

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div className='flex flex-col gap-3'>
            <Typography className='text-xl ' color={colors.teal[500]}>Options</Typography>
            <FormControl sx={{
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: colors.grey[500],
                },
                "& .css-12lseh1-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                    color: colors.grey[500],
                }
            }}

            >
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    fullWidth
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name} -price-100
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Typography className='text-xl ' color={colors.teal[500]}>Add Custom Details</Typography>
            <Box
                component="textarea"
                sx={{
                    width: "100%",
                    outline: colors.teal[100],
                    border: `1px solid ${colors.grey[500]}`,
                    '$:focus': {
                        outline: colors.teal[100],
                    }
                }}
                className="resize-none rounded-sm px-2 focus:border-teal-500 focus:border-2 "
                placeholder="Enter your elergies/or what you want to add to your order"
            />

            <Button sx={{ color: colors.grey[100], background: colors.red[300] + '!important' }} >Add To Cart</Button>

        </div>
    );
}