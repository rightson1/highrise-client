import Hero from "../components/Hero";
import Dishes from "../components/Dishes"
import Navbar from "../components/Navbar"
import RowContainer from "../components/Row";
export default function Home() {



  return (

    <div className="main bg-primary">
      <div className="client w-screen min-h-[80vh] md:px-7" >
        <Navbar />
        <Hero />
      </div>
      <div className="w-full">
        <Dishes />
        <RowContainer />
      </div>
    </div>
  );



}

