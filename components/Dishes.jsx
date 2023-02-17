import React from "react";
import Box from "@mui/material/Box";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { motion } from "framer-motion";
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { useEffect, useState, useRef } from "react";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { useAllCategoryQuery } from "../utils/hooks/useCategories";
const Dishes = ({ setFilter, filter, categories: data }) => {
    const [scrollValue, setScrollValue] = React.useState(5)
    const { data: categories } = useAllCategoryQuery()

    const rowRef = useRef();

    useEffect(() => {
        rowRef.current.scrollLeft += scrollValue;
    }, [scrollValue])
    const Cat = ({ category, index }) => {
        return <div
            whileTap={{ scale: 0.75 }}
            key={index}
            className={`group ${filter === category.name ? "bg-cartNumBg" : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg `}
            onClick={() => setFilter(category.name)}
        >
            <div
                className={`w-10 h-10 rounded-full shadow-lg ${filter === category.name
                    ? "bg-white"
                    : "bg-cartNumBg"
                    } group-hover:bg-white flex items-center justify-center`}
            >
                <FastfoodIcon
                    className={`${filter === category.name
                        ? "text-textColor"
                        : "text-white"
                        } group-hover:text-textColor text-lg`}
                />
            </div>
            <p
                className={`text-sm ${filter === category.name
                    ? "text-white"
                    : "text-textColor"
                    } group-hover:text-white`}
            >
                {category.name}
            </p>
        </div>
    }

    return <section className="w-full mt-6 px-5" id="menu">
        <div className="w-full flex flex-col items-center justify-center">
            <Box className="w-full justify-between items-center flex ">
                <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
                    Categories Available

                </p>
                <div className="hidden md:flex items-center gap-3">

                    <motion.div
                        onClick={() => setScrollValue(-200)}

                        whileTap={{
                            scale: 0.75
                        }}


                        className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer duration-100 transition-all shadow-lg ease-in-out items-center justify-center flex  ">
                        <ChevronLeftOutlinedIcon className="text-lg text-white " />
                    </motion.div>
                    <motion.div
                        onClick={() => setScrollValue(200)}
                        whileTap={{

                            scale: 0.75
                        }} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer duration-100 transition-all shadow-lg ease-in-out items-center justify-center flex  ">
                        <ChevronRightOutlinedIcon className="text-lg text-white " />

                    </motion.div>

                </div>

            </Box>
            <motion.div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scroll-smooth scrollbar-none px-3"
                layout="position"
                ref={rowRef}
            >
                {
                    data ? data.filter(({ status }) => status === 'available').map((category, index) => (
                        <Cat key={index} category={category} />
                    )) : categories &&
                    categories.map((category, index) => (
                        <Cat key={index} category={category} />
                    ))
                }
            </motion.div>
        </div>
    </section>
}

export default Dishes;

// const categories = [{
//     id: 1,
//     name: "Chicken",
//     urlParamName: "chicken",
// },

// {
//     id: 3,
//     name: "Rice",
//     urlParamName: "rice",
// },
// {
//     id: 4,
//     name: "Fish",
//     urlParamName: "fish",
// },
// {
//     id: 5,
//     name: "Fruits",
//     urlParamName: "fruits",
// },
// {
//     id: 6,
//     name: "Icecreams",
//     urlParamName: "icecreams",
// },

// {
//     id: 7,
//     name: "Soft Drinks",
//     urlParamName: "drinks",
// },
// ];