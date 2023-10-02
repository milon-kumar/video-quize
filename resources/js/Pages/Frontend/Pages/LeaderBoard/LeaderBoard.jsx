import React, {Fragment} from 'react';
import Header from "@/Pages/Frontend/Components/Header";
import {Head} from "@inertiajs/react";
import App from "@/Pages/Frontend/Layout/App";

const LeaderBoard = ({title}) => {
    return (
        <Fragment>
            <App title={title}>
                <div className="text-6xl text-center">Leader Board Component</div>
            </App>
        </Fragment>
    );
};

export default LeaderBoard;
