/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { zoomIn } from "./motion";

const SingleProduct = (item) => {
    const { name, price, image, category, _id, business } = item;
    return (
        <motion.article variants={zoomIn(0, 0.1)} initial='hidden' animate='show'>
            <Link href={`/stores/${business}/product/${_id}`}>
                <div
                    className={`flex flex-col shadow-xl min-h-[365px] ${parent ? "w-[250px] h-auto" : ""
                        } bg-white items-center justify-center sm:w-[250px] w-[90%] mx-auto rounded-2xl mt-4`}
                >
                    <div className='w-[90%] flex justify-center  mt-4 rounded-2xl'>
                        <img
                            src={image}
                            className='rounded-2xl object-contain h-[250px]'
                            alt={category}
                        />
                    </div>
                    <div className='w-[90%] mt-3 p-2'>
                        <h1 className='text-gray-600 font-[500] overflow-hidden text-[16px]'>
                            {name.length > 40 ? name.substring(0, 40).padEnd(43, ".") : name}
                        </h1>
                        <p className='mt-1 text-[12px] font-bold text-black75'>${price}</p>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
};

export default SingleProduct;
