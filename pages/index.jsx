import Hero from "../components/Hero";
import Dishes from "../components/Dishes"
import RowContainer from "../components/Row";
import Win from "../components/Win";
import Categories from "../components/Categories";
import { useGlobalProvider } from "../utils/themeContext";
import { useState } from "react";
import { useItemQuery } from "../utils/hooks/useItems";

export default function Home() {
  const { colors } = useGlobalProvider()
  const [filter, setFilter] = useState("Chicken");
  const { data } = useItemQuery(filter)
  return (

    <div className="bg-primary ">
      <Hero />
      <Dishes  {...{ setFilter, filter }} />
      <RowContainer data={data} {...{ setFilter, filter }} />
      <Win />
      {/* <Categories /> */}
      {/* <Stores /> */}
    </div>
  );



}


Home.layout = true;
