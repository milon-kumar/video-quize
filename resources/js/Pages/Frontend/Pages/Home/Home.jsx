import React, {Fragment} from 'react';
import {Head} from "@inertiajs/react";

const Home = ({title,metaDescription}) => {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta type="description" content={metaDescription} headKey="description"/>
            </Head>
            <section className="my-container">
                <iframe className="w-full h-[450px]"
                        src="https://www.youtube-nocookie.com/embed/ZV70-WYRNnU?si=s3kWuRNhYjV4SeWi&amp;start=186"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </section>
        </Fragment>
    );
};

export default Home;
