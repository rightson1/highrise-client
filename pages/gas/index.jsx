import React, { useState } from "react";
import GasCards from "../../components/GasCards";
import GasCats from "../../components/GasCats";
import GasHero from "../../components/GasHero";
const Gas = () => {
    const [filter, setFilter] = useState()
    return <div className="flex min-h-screen flex-col">
        <GasHero />
        <GasCats {...{ filter, setFilter }} />
        <GasCards />
    </div>
};

Gas.gas = true;
export default Gas;
