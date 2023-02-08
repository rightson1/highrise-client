import Dishes from "../../../components/Dishes"
import { useGlobalProvider } from "../../../utils/themeContext";
import StoreHero from "../../../components/StoreHero";
import { useState } from "react";
import Foods from "../../../components/Foods";
import More from "../../../components/More";
import { useRouter } from "next/router";
import { useSingleBusinessQuery } from "../../../utils/hooks/useBusiness";
import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";
import { useCategoryQuery } from "../../../utils/hooks/useCategories";
export default function Store() {
    const [scroll1, setScroll1] = useState()
    const { store } = useRouter().query
    const { colors, animate, setAnimate } = useGlobalProvider()
    const { data } = useSingleBusinessQuery(store)
    const { data: categories } = useCategoryQuery(store)
    const [filter, setFilter] = useState('Chicken')

    useEffect(() => {
        if (animate.find((item) => item === store)) {
            return
        } else {
            setAnimate([...animate, store])
        }

    }, [])


    useEffect(() => {
        if (categories) {
            setFilter(categories[0]?.name)
        }
    }, [categories])
    useEffect(() => {
        if (!open) {
            toast.error('Restrunt Closed')
        }
    }, [data])

    return (

        data ? <div className="bg-primary overflow-x-hidden ">
            <StoreHero {...{ data }} />
            <Dishes store={true} {...{ scroll1, setScroll1, filter, setFilter, categories }} />
            <Foods filter={filter} />

        </div> : (
            <Box>
                <Skeleton variant="rectangular" width={"100vw"} height={118} />
                <Skeleton variant="rectangular" width={"100vw"} height={20} />
                <Box

                    className="md:max-w-[300px] min-w-[250px]
            bg-cardOverlay rounded-lg py-2 px-4    hover:drop-shadow-lg flex flex-col items-center justify-evenly relative" >
                    <Box className="flex gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {

                            return (
                                <Box
                                    key={index}
                                    className="md:max-w-[300px] min-w-[250px]
            bg-cardOverlay rounded-lg py-2 px-4    hover:drop-shadow-lg flex flex-col items-center justify-evenly relative" >
                                    <Skeleton variant="rectangular" width={210} height={118} />
                                    <Skeleton variant="text" width={210} />
                                    <Skeleton variant="text" width={210} />
                                    <Skeleton variant="text" width={210} />
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
                <Toaster />

            </Box>
        )
    );



}

const categories = [
    {
        id: 2,
        name: "On Discount",

    },
    {
        id: 3,
        name: "Top Rated",

    },

]
