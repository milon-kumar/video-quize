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
            <div className="my-container">
                {children}
            </div>
        </Fragment>
    );
};

export default App;
