import React from "react";
import { useRouter } from "next/router";
const Index = () => {
    const { store, item } = useRouter().query;
    return <div>{store},{item}</div>;
};

export default Index;
