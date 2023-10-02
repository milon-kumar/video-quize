import React, {Fragment} from 'react';
import Header from "@/Pages/Frontend/Components/Header";
import {Head} from "@inertiajs/react";

const Quize = ({title}) => {
    return (
        <div>
            <div>
                <Fragment>
                    <Header/>
                    <Head>
                        <title>{title ?? "Quiz"}</title>
                    </Head>
                    <div className="text-3xl font-semibold text-pink-600 text-center">
                        welcome to my Quiz Page
                    </div>
                </Fragment>
            </div>
        </div>
    );
};

export default Quize;
