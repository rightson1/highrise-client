import React from "react";
import Head from "next/head";

const Header = ({ title, desc }) => {
    return <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />

        <link rel="icon" href="/favicon.ico" />

    </Head>
};

export default Header
