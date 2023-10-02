import React, {Fragment} from 'react';
import App from "@/Pages/Frontend/Layout/App";
const Home = ({title}) => {
    return (
        <Fragment>
            <App title={title}>
                <div className="text-6xl text-center">Home Component</div>
            </App>
        </Fragment>
    );
};

export default Home;
