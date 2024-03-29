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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useSingleItemQuery } from '../utils/hooks/useItems';
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


function getStyles(name, optionType, theme) {
    return {
        fontWeight:
            optionType.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


export default function OptionEdit({ food: data, setDrawer }) {
    const { data: food, isLoading } = useSingleItemQuery(data._id)
    const theme = useTheme();
    const { colors, cart, setCart } = useGlobalProvider()
    const [optionType, setOptionType] = React.useState([]);
    const router = useRouter()
    const [trimed, setTrimed] = useState(null)
    const { store } = router.query;
    const { id } = router.query;
    const [sizes, setSizes] = useState(null);
    const [total, setTotal] = useState()
    const [itemExist, setItemExist] = useState(false)

    useEffect(() => {
        if (cart.length > 0) {
            const exists = cart.find((item) => item.id === store)
            if (exists) {
                const item = exists.items.find((item) => item.id === id)
                if (item) {
                    setItemExist(true)
                }
            }
        }
    }, [cart])

    useEffect(() => {
        if (food.price) {
            setTotal(food.price)
        }
        else if (sizes || optionType) {
            const option = Number(optionType.reduce((acc, cur) => acc + cur.price, 0))
            const total = typeof Option == Number ? option : 0 + Number(sizes?.price ? sizes.price : 0)
            setTotal(total)
        }

    }, [optionType, sizes])




    const handleSubmit = (e) => {
        const { image, category, desc, status, ...others } = food
        e.preventDefault()
        if (food?.sizes.length > 0 && !sizes) {
            toast.error('Please select a size')
            return;

        }

        const filtered = cart.map(item => {
            if (item.id === store) {

                return {
                    ...item,
                    items: item.items.filter(item => item.id !== data.id)
                }
            } else {
                return item
            }
        }).map((item) => {
            if (item.id === store) {
                return {
                    ...item,
                    items: [...item.items, { ...others, options: optionType, sizes, price: total, id: item.items.length + 1, qty: 1 }]
                }
            } else {
                return item
            }
        })
        setCart(filtered)
        localStorage.setItem('cart', JSON.stringify(filtered))
        setDrawer(false)
        toast.success('Edited successfully')



    }
    const handleChange = (event) => {

        const {
            target: { value },
        } = event;
        setOptionType(value);
    };
    return (
        <Box component="form" className='flex flex-col gap-3' onSubmit={handleSubmit}>
            {
                food?.options?.length > 0 && (
                    <Box className="w-full flex flex-col">
                        <Typography className='text-xl ' color={colors.orange[500]}>Options</Typography>
                        <FormControl className='w-full' sx={{
                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                borderColor: colors.grey[500],
                            },
                            "& .css-12lseh1-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                                color: colors.grey[500],
                            }
                        }}

                        >

                            <InputLabel id="demo-multiple-chip-label">Options</InputLabel>
                            <Select
                                required
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                fullWidth
                                value={optionType}
                                onChange={handleChange}
                                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value.optionName} label={value.optionName} />
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {food?.options?.map((option, index) => (
                                    <MenuItem
                                        key={index}
                                        value={option}
                                        style={getStyles(name, optionType, theme)}
                                        className='flex gap-3'
                                    >
                                        <Typography> {option.optionName}</Typography><Typography className='text-red-500'>  {option.price ? '+' + option.price : ''}</Typography>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                )
            }
            {
                food?.sizes?.length > 0 && (
                    <Box className="w-full flex flex-col">
                        <Typography className='text-xl ' color={colors.orange[500]}>Sizes</Typography>
                        <FormControl>
                            <RadioGroup
                                required
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={null}
                                onChange={(e) => setSizes(food.sizes.find((size) => size.name === e.target.value))}
                                name="radio-buttons-group"
                                sx={{
                                    '& .MuiButtonBase-root.MuiRadio-root.Mui-checked': {
                                        color: colors.orange[500]
                                    }
                                }}
                            >
                                {
                                    food?.sizes?.map((size, index) => (
                                        <FormControlLabel key={index} value={size.name} control={<Radio />} label={size.name.toUpperCase() + ' ' + size.price + ' Ksh'} />

                                    ))
                                }
                            </RadioGroup>
                        </FormControl>
                    </Box>
                )
            }
            <Box className="flex gap-3 ">
                <Box>Total</Box>
                <Box>{total}</Box>
            </Box>
            <Button type='submit' sx={{ color: colors.grey[100], background: colors.red[300] + '!important' }} >Edit</Button>

            <Toaster />
        </Box>
    );
}
