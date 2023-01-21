import Hero from "../components/Hero";
import Dishes from "../components/Dishes"
import Navbar from "../components/Navbar"
import RowContainer from "../components/Row";
import Win from "../components/Win";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";
import LabelBottomNavigation from "../components/Bottom";
import { useGlobalProvider } from "../utils/themeContext";
import { Box } from "@mui/system";
import TemporaryDrawer from "../components/SideDrawer";

export default function Home() {

  const { colors } = useGlobalProvider()

  return (

    <div className="bg-primary w-[100vw] overflow-x-hidden ">
      <div className="client  min-h-[80vh] md:px-7 w-[100vw]" >
        <Navbar />
        <Hero />
      </div>
      <div className="w-full">
        <Dishes />
        <RowContainer />
        <Win />
        <Categories />
        <Footer />
        <LabelBottomNavigation />
        <ScrollToTop smooth color={colors.find} height="15px" className="top" />
        <TemporaryDrawer />
      </div>
    </div>
  );



}

