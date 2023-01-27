import Dishes from "../../../components/Dishes"
import { useGlobalProvider } from "../../../utils/themeContext";
import StoreHero from "../../../components/StoreHero";
import { useState } from "react";
import Foods from "../../../components/Foods";

export default function Store() {
    const [scroll1, setScroll1] = useState()
    const { colors } = useGlobalProvider()

    return (

        <div className="bg-primary overflow-x-hidden ">
            <StoreHero />
            <Dishes store={true} {...{ scroll1, setScroll1 }} />
            <Foods />
        </div>
    );



}

