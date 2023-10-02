import React, {Fragment} from 'react';
import {Head} from "@inertiajs/react";

const MyComponent = ({title}) => {
    return (
        <Fragment>
            <Head title={title}/>
            <h1>Quiz Page</h1>
        </Fragment>
    );
};

export default MyComponent;
