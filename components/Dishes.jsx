import React from "react";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { useEffect, useState } from "react";
const Dishes = () => {
    const [filter, setFilter] = useState("chicken");

    return <section className="w-full my-6 mx-[20px]" id="menu">
        <div className="w-full flex flex-col items-center justify-center">
            <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
                Our  Categories
            </p>

            <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
                {categories &&
                    categories.map((category) => (
                        <div
                            whileTap={{ scale: 0.75 }}
                            key={category.id}
                            className={`group ${filter === category.urlParamName ? "bg-cartNumBg" : "bg-card"
                                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg `}
                            onClick={() => setFilter(category.urlParamName)}
                        >
                            <div
                                className={`w-10 h-10 rounded-full shadow-lg ${filter === category.urlParamName
                                    ? "bg-white"
                                    : "bg-cartNumBg"
                                    } group-hover:bg-white flex items-center justify-center`}
                            >
                                <FastfoodIcon
                                    className={`${filter === category.urlParamName
                                        ? "text-textColor"
                                        : "text-white"
                                        } group-hover:text-textColor text-lg`}
                                />
                            </div>
                            <p
                                className={`text-sm ${filter === category.urlParamName
                                    ? "text-white"
                                    : "text-textColor"
                                    } group-hover:text-white`}
                            >
                                {category.name}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    </section>
}

export default Dishes;

const categories = [{
    id: 1,
    name: "Chicken",
    urlParamName: "chicken",
},
{
    id: 2,
    name: "Curry",
    urlParamName: "curry",
},
{
    id: 3,
    name: "Rice",
    urlParamName: "rice",
},
{
    id: 4,
    name: "Fish",
    urlParamName: "fish",
},
{
    id: 5,
    name: "Fruits",
    urlParamName: "fruits",
},
{
    id: 6,
    name: "Icecreams",
    urlParamName: "icecreams",
},

{
    id: 7,
    name: "Soft Drinks",
    urlParamName: "drinks",
},
];