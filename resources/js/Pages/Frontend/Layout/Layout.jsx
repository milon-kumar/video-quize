import React, {Fragment} from "react";
import Header from "@/Pages/Frontend/Components/Header";
import Footer from "@/Pages/Frontend/Components/Footer";
import {Head} from "@inertiajs/react";

const Layout = ({ children }) =>{
    return (
        <Fragment>
            <Head>
                <title>My App</title>
            </Head>
            <Header />
            <article className="my-container">{children}</article>
            <Footer />
        </Fragment>
    )
}

export default Layout;
