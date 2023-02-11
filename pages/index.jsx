import Hero from "../components/Hero";
import { useEffect } from "react";
import Dishes from "../components/Dishes"
import RowContainer from "../components/Row";
import Win from "../components/Win";
import Categories from "../components/Categories";
import { useGlobalProvider } from "../utils/themeContext";
import { useState } from "react";
import { useItemQuery } from "../utils/hooks/useItems";
import { Toaster, toast } from "react-hot-toast";
import { useOrders } from "../utils/orderContext";

export default function Home() {
  const { notifications, setNotifications } = useOrders();
  const [filter, setFilter] = useState("Chicken");
  const { data } = useItemQuery(filter)
  useEffect(() => {
    notifications.map((item) => {
      if (item.status === 'Cancelled') {
        toast.error(item.message)
      } else {
        toast.success(item.message)
      }
      setNotifications(notifications.filter((i) => i.id !== item.id))
    })
  }, [notifications])


  return (

    <div className="bg-primary ">
      <Hero />
      <Dishes  {...{ setFilter, filter }} />
      <RowContainer data={data} {...{ setFilter, filter }} />
      <Win />
      <Toaster />
    </div>
  );



}


Home.layout = true;
