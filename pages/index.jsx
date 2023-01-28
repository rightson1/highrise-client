import Hero from "../components/Hero";
import Dishes from "../components/Dishes"
import RowContainer from "../components/Row";
import Win from "../components/Win";
import Categories from "../components/Categories";
import { useGlobalProvider } from "../utils/themeContext";
import Stores from "../components/Stores";

export default function Home() {

  const { colors } = useGlobalProvider()

  return (

    <div className="bg-primary ">
      <Hero />
      <Dishes />
      <RowContainer />
      <Win />
      <Categories />
      {/* <Stores /> */}
    </div>
  );



}


Home.layout = true;
