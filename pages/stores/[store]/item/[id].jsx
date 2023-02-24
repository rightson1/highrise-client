/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import {
    AiOutlineArrowLeft,

} from "react-icons/ai";
import Product from "../../../../components/Product";
import { fadeIn, textContainer, textVariant } from "../../../../components/motion";
import { motion } from "framer-motion";
import { useSingleBusinessQuery } from "../../../../utils/hooks/useBusiness";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CallIcon from '@mui/icons-material/WifiCalling3Outlined';
import { Skeleton } from "@mui/material";
import CheckoutGas from "../../../../components/CheckoutGas";
import Options from "../../../../components/Options";
import { useItemsByStoreQuery, useSingleItemQuery } from "../../../../utils/hooks/useItems";
import Carousel from "../../../../components/Carousel";
import Header from "../../../../components/Head";
function SingleProduct() {
    const router = useRouter();
    const { id } = useRouter().query
    const { data: product, isLoading } = useSingleItemQuery(id);
    const { data: business, isLoading: loading } = useSingleBusinessQuery(product?.business);
    const { data, isLoading: lodaing } = useItemsByStoreQuery(product?.business, product?.items)
    const parentRef = useRef(null);
    const [open, setOpen] = useState(false)


    return (
        <div>
            {
                (product && business) ? (
                    <>
                        <CheckoutGas {...{ open, setOpen, product, business }} />
                        <Header title={product.name} desc={product.desc} />
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
                                        variants={fadeIn("up", "spring", 0.5, 0.4)}
                                        initial='hidden'
                                        animate='show'
                                        className='mt-2'
                                    >
                                        <Options {...{ food: product }} />
                                    </motion.div>



                                </motion.div>
                            </div>
                        </div>
                        {/* bottom section */}
                        <div className='maylike-products-wrapper'>
                            <h2 className='font-bold underline'>You may also like</h2>
                            <div className='marquee'>

                                <Carousel {...{ data, loading: isLoading }} />

                            </div>
                        </div>
                    </>
                ) : (isLoading || loading) ? (<>
                    <Box
                        className="w-full h-[250px]
            bg-cardOverlay rounded-lg py-2 px-4    hover:drop-shadow-lg flex flex-col items-center justify-evenly relative" >
                        <Typography variant="h5" sx={{
                            fontFamily: 'Nunito',
                            fontWeight: 700,
                            fontSize: '1.2rem',
                        }}>
                            Loading...
                        </Typography>
                    </Box>

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
export default SingleProduct;
