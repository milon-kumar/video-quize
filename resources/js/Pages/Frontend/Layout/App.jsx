import React, {Fragment} from 'react';
import {Head} from "@inertiajs/react";
import Header from "@/Pages/Frontend/Components/Header";

const App = ({title,children}) => {
    return (
        <Fragment>
            <Head>
                <title>{title ?? null}</title>
            </Head>
            <Header />
            {children}
        </Fragment>
    );
};

export default App;
