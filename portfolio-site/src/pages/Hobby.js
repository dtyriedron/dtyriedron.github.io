import React from 'react';
import Hero from '../components/Hero';
import {Helmet} from 'react-helmet';

import data from '../assests/data/Hobbies.json';

function Hobby(){
    var url = new URL(window.location.href);
    var param = url.searchParams.get("pos");
    return(
        <div>
            <Helmet>
                <title>Dylan Tyrie-Dron: Hobby- {data[param].name}</title>
                <meta name="description" content={data[param].description}></meta>
            </Helmet>
            <Hero title={data[param].name} text={data[param].description}/>
        </div>
    );
}
export default Hobby;