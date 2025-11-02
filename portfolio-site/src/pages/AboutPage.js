import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Helmet} from 'react-helmet';


import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){
    return(
        <div>
            <Helmet>
                <title>Dylan Tyrie-Dron: About me!</title>
                <meta name="description" content="A simple description of who I am and my core experience as a developer."></meta>
            </Helmet>

            <Hero title={props.title}/>

            <Content>
                <Typography variant="subtitle1" color="secondary"> Hello, my name is Dylan. I am a full stack software engineer with experience in Java, Android, C++, Ada, C#, Arduino, Baremetal Embedded (Giant Gecko), HTML, ReactJS, C, CSS, JavaScript, Python and Haskell. </Typography>
            </Content>
        </div>
    );
}
export default AboutPage;