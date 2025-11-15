import React from 'react';
import Hero from '../components/Hero';
import {Helmet} from 'react-helmet';

import data from '../assests/data/Achievements.json';

function Achievement(){
    var url = new URL(window.location.href);
    var param = url.searchParams.get("pos");
    return(
        <div>
            <Helmet>
                <title>Dylan Tyrie-Dron: Achievement- {data[param]}.name</title>
                <meta name="description" content={data[param].description}></meta>
            </Helmet>
            <Hero title={data[param].name} text={data[param].description}/>
        </div>
    );
}
export default Achievement;