import Dishes from "../../../components/Dishes"
import { useGlobalProvider } from "../../../utils/themeContext";
import StoreHero from "../../../components/StoreHero";
import { useState } from "react";
import Foods from "../../../components/Foods";
import More from "../../../components/More";
import Dial from "../../../components/Dial";
export default function Store() {
    const [scroll1, setScroll1] = useState()
    const { colors } = useGlobalProvider()

    return (

        <div className="bg-primary overflow-x-hidden ">
            <StoreHero />
            <Dishes store={true} {...{ scroll1, setScroll1 }} />
            <Foods />
            <More {...{ categories }} />
        </div>
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
