import React, { useState } from "react";
import AboutGas from "../../components/AboutGas";
import GasCards from "../../components/GasCards";
import GasCats from "../../components/GasCats";
import GasHero from "../../components/GasHero";
const Gas = () => {
    return <div className="flex min-h-screen flex-col">
        <GasHero />
        <GasCards />
        <AboutGas />
    </div>
};

Gas.gas = true;
export default Gas;
