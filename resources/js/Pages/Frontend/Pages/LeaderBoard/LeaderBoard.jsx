import React, {Fragment} from 'react';
import App from "@/Pages/Frontend/Layout/App";
import {Link} from "@inertiajs/react";

const LeaderBoard = ({title,time}) => {
    return (
        <Fragment>
            <App title={title}>
                <div className="text-6xl text-center">Leader Board Component</div>

                <div className="font-semibold mt-[600px]">The current time is {time}</div>
                <Link href={'/leader-board'} preserveScroll > Refresh</Link>
            </App>
        </Fragment>
    );
};

export default LeaderBoard;
