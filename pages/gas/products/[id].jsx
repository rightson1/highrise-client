/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import {
    AiOutlineArrowLeft,

} from "react-icons/ai";
// import Product from "../../../components/Product";
import { fadeIn, textContainer, textVariant } from "../../../components/motion";
import { motion } from "framer-motion";
import { useSingleItemQuery } from "../../../utils/hooks/useItems";
import { useSingleBusinessQuery } from "../../../utils/hooks/useBusiness";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CallIcon from '@mui/icons-material/WifiCalling3Outlined';
import { Skeleton } from "@mui/material";
import CheckoutGas from "../../../components/CheckoutGas";
function SingleProduct() {
    // const { description, details, name, category, image, _id, price } = product;
    const router = useRouter();
    const { id } = useRouter().query
    const { data: product, isLoading } = useSingleItemQuery(id);
    const { data: business, isLoading: loading } = useSingleBusinessQuery(product?.business);
    const [open, setOpen] = useState(false)

    const handleAddToCart = id => {

    };


    return (
        <div>
            {
                (product && business) ? (
                    <>
                        <CheckoutGas {...{ open, setOpen, product, business }} />
                        <div className='mt-3 px-3'>
                            <div className='relative sm:flex sm:mt-10'>
                                <div className='w-full sm:flex-[1] mx-auto'>
                                    <motion.div
                                        variants={fadeIn("up", "spring", 0.3, 0.4)}
                                        initial='hidden'
                                        animate='show'
                                        className='flex justify-between pt-1 pl'
                                    >
                                        <button onClick={() => router.back()}>
                                            <AiOutlineArrowLeft size={25} />
                                        </button>
                                        <p className='right-10 text-[12px] text-black50 sm:absolute'>
                                            {business.name}
                                        </p>
                                    </motion.div>
                                    {/* description */}
                                    <motion.div
                                        variants={fadeIn("up", "spring", 0.5, 0.4)}
                                        initial='hidden'
                                        animate='show'
                                        className='mt-2'
                                    >
                                        <p className='text-[12px] sm:mb-2 text-Grayish-blue'>{product.category}</p>
                                        <p className='text-lg font-bold'>{product.name}</p>
                                        <div className='flex mt-2 place-content-center'>
                                            <img
                                                src={product.image}
                                                className='w-full rounded-2xl'
                                                alt={product.name}
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                                {/* content */}
                                <motion.div
                                    variants={textContainer}
                                    initial='hidden'
                                    animate='show'
                                    className='p-8 sm:mx-14 sm:px-16 sm:flex-1 bg-pale-orange sm:bg-[#fcffe7] mt-7 rounded-3xl'
                                >
                                    <motion.div
                                        variants={textVariant(0.2)}
                                        initial='hidden'
                                        animate='show'
                                        className='flex justify-between mb-3 text-black sm:mb-6'
                                    >
                                        <Typography variant="h5" fontFamily="Nunito" fontSize={30}>{business.name}</Typography>
                                    </motion.div>
                                    <motion.div
                                        variants={textVariant(0.2)}
                                        initial='hidden'
                                        animate='show'
                                        className='flex justify-between mb-3 text-black sm:mb-6'
                                    >
                                        <p className='font-[600]'>KSH {product.price}</p>
                                        <Box className="flex gap-4">
                                            <CallIcon />
                                            <Typography component="a" href={business.phone}>    {business.phone}</Typography>

                                        </Box>
                                    </motion.div>
                                    <motion.p
                                        variants={textVariant(0.4)}
                                        initial='hidden'
                                        animate='show'
                                        className='my-9 text-[15px] text-black50 sm:my-14'
                                    >
                                        {business.description}
                                    </motion.p>
                                    <motion.div
                                        variants={textVariant(0.2)}
                                        initial='hidden'
                                        animate='show'
                                        className='flex flex-col  gap-1 mb-3 text-black sm:mb-6'
                                    >
                                        <Typography variant="h5" fontFamily='Roboto' fontSize={25} className="font-bold">Location Details</Typography>

                                        <Typography fontFamily="Inter" fontSize={15} className="" >
                                            {business.location}
                                        </Typography>
                                        <div className=" img-over ">
                                            <img src={business.locationImg} className="h-[200px] object-cover rounded-md w-full object-cover" />
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        variants={textVariant(0.2)}
                                        initial='hidden'
                                        animate='show'
                                        className='flex flex-col  gap-1 mb-3 text-black sm:mb-6'
                                    >
                                        <Typography variant="h5" fontFamily='Roboto' fontSize={25} className="font-bold">Delivery</Typography>

                                        <Typography fontFamily="Inter" fontSize={15} className="" >
                                            {business?.delivery ? "We Offer Free Delivery" : "We charge for delivery"},{business?.details}
                                        </Typography>

                                    </motion.div>
                                    <button
                                        onClick={() => setOpen(true)}
                                        className='flex p-[18px] hover:bg-secondary bg-tertiary text-white w-full gap-3 justify-center items-center rounded-2xl font-[700] text-[16px]'
                                    >
                                        Complete Order
                                        {/* <AiOutlineShoppingCart size={25} /> */}
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                        {/* bottom section */}
                        {/* <div className='maylike-products-wrapper'>
                <h2 className='font-bold underline'>You may also like</h2>
                <div className='marquee'>
                    <div ref={parentRef} className='maylike-products-container track'>
                        {products.map(item => (
                            <Product key={item._id} parent={parentRef} {...item} />
                        ))}
                    </div>
                </div>
            </div> */}
                    </>
                ) : (isLoading || loading) ? (<>
                    <Skeleton height={"100vh"} width="100vw"></Skeleton>
                </>) : (<>
                    <Box
                        className="w-full h-[250px]
            bg-cardOverlay rounded-lg py-2 px-4    hover:drop-shadow-lg flex flex-col items-center justify-evenly relative" >
                        <Typography variant="h5" sx={{
                            fontFamily: 'Nunito',
                            fontWeight: 700,
                            fontSize: '1.2rem',
                        }}>
                            No items found
                        </Typography>
                    </Box>
                </>)
            }
        </div>
    );
};
SingleProduct.gas = true;

export default SingleProduct;
