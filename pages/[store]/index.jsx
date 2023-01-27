import Hero from "../../components/Hero";
import Dishes from "../../components/Dishes"
import Navbar from "../../components/Navbar"
import RowContainer from "../../components/Row";
import Win from "../../components/Win";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";
import ScrollToTop from "react-scroll-to-top";
import LabelBottomNavigation from "../../components/Bottom";
import { useGlobalProvider } from "../../utils/themeContext";
import { Box } from "@mui/system";
import TemporaryDrawer from "../../components/SideDrawer";
import Stores from "../../components/Stores";
import StoreNav from "../../components/StoreNav";
import StoreHero from "../../components/StoreHero";
import StoreBottom from "../../components/StoreBottom";
import { useState } from "react";
import Foods from "../../components/Foods";

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

