import React, { useEffect, useState } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Image from "next/image";
import { motion } from "framer-motion";
import GasMeterOutlinedIcon from '@mui/icons-material/GasMeterOutlined';
import { Box, Button } from "@mui/material";
import { useGasCategoryQuery } from "../utils/hooks/useCategories";
import { useBusinessQuery } from "../utils/hooks/useBusiness";
import { useGlobalProvider } from "../utils/themeContext";
import axios from "axios";

const GasCats = ({ kg, setKg, category, setCategory }) => {
    const [dropDown, setDropDown] = useState(false);

    const [cart, setCart] = useState(null)
    const { baseUrl } = useGlobalProvider();
    const { data } = useGasCategoryQuery()
    const { data: businesses } = useBusinessQuery()

    const fadeIn = (direction, type, delay, duration) => ({
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut",
            },
        },
    });

    return (
        <div className='flex flex-col  px-5'>
            <div className='flex justify-between text-[12px] mt-3 font-medium'>
                <div className='flex gap-4 text-very-dark-blue'>
                    <Button
                        onClick={() => setKg(6)}
                        className='flex items-center gap-1 px-3 py-1 shadow-lg rounded-2xl bg-pale-orange '

                        sx={{
                            backgroundColor: kg === 6 ? "#FF621F" : "#FEEBE5" + " !important",
                            color: kg === 6 ? "#fff" : "#FF621F" + " !important",
                        }}
                    >

                        6kg
                    </Button>
                    <Button
                        onClick={() => setKg(13)}
                        className='flex items-center gap-1 px-3 py-1 shadow-lg rounded-2xl bg-pale-orange'
                        sx={{
                            backgroundColor: kg === 13 ? "#FF621F" : "#FEEBE5" + " !important",
                            color: kg === 13 ? "#fff" : "#FF621F" + " !important",
                        }}
                    >

                        13kg
                    </Button>
                </div>
                {/* category */}
                <div className='relative items-center px-3 py-1 shadow-lg rounded-2xl bg-pale-orange h'>
                    <Box
                        onClick={() => setDropDown(prev => !prev)}
                        className='flex items-center gap-2 cursor-pointer min-w-[100px] justify-center'
                    >
                        {category || "   Gas Company"}
                        <ArrowDownwardIcon sx={{
                            transform: dropDown ? "rotate(180deg)" : "rotate(0deg)",
                        }} />
                    </Box>
                    {dropDown && (
                        <motion.div
                            variants={fadeIn("up", "spring", 0.1, 0.3)}
                            initial='hidden'
                            animate='show'
                            className='absolute flex flex-col h-auto w-auto left-0  gap-3 justify-between p-3 top-9 rounded-2xl bg-pale-orange z-10'
                        >
                            {
                                data.map(company => (<Box key={company.id} className="py-1 px-1 hover:bg-bgEn rounded-md"
                                    onClick={() => {
                                        setCategory(company.name);
                                        setDropDown(false);
                                    }}
                                    sx={{
                                        bgcolor: category === company.name && "#Fff" + " !important",
                                    }}
                                >
                                    <button key={company.id} className='flex gap-3 opacity-90 font-semibold ' >
                                        <GasMeterOutlinedIcon className="opacity-70" /> {company.name}

                                    </button>
                                    <hr />
                                </Box>
                                ))

                            }

                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};


export default GasCats;