import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Helmet} from 'react-helmet';

import LinearProgressWithLabel from '../components/LinearProgressWithLabel';

function PortfolioPage(props){
    // var url = new URL(window.location.href);
    // var param = url.searchParams.get("pos");
    var param = props.pos;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [language, setLanguage] = useState('');

    const setData = (
        array,
    ) => {
        console.log(array)
        setName("jam");  //array[param].name
        setDescription("damson"); //array[param].description
        // fetch(`https://api.github.com/repos/dtyriedron/${array[param].name}/languages`)
        // .then(res => res.json())
        // .then(languages => {
        //     setLanguages(languages);     
        // });
    };

    useEffect(() => {
        fetch('https://api.github.com/users/dtyriedron/repos')
        .then(res => res.json())
        .then(data => {
            setData(data);     
        });
// eslint-disable-next-line
    }, []);

    const setLanguages = (
        object,
    ) => {
        console.log(object)
        var obj = object;
        setLanguage(obj);
    };

    var totalBytes =0;
    for(var x in language){
        totalBytes+=parseInt(language[x])
    }
    console.log(totalBytes);
    var percent=0;

    return(
        
        <div>
            <Helmet>
                <title>Dylan Tyrie-Dron: Project- {name}</title>
                <meta name="description" content={description}></meta>
            </Helmet>
            <Hero title={name}/>
            <Grid container style={{paddingLeft:"25%"}}>
                <Grid container item>
                    <Grid item xs={7}>
                        <p>
                            {<Typography variant="subtitle1" color="secondary">{description}</Typography>} 
                        </p>
                    </Grid>
                    <Grid item xs={1}>
                        <Button href= {`https://github.com/dtyriedron/${name}`} color="secondary" target="_blank" style={{right:0, bottom:0, width:"100%"}} variant="contained">
                            {<Typography variant="button" color="primary">Github</Typography>}
                        </Button>{' '}
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Box border={1} padding="1rem" borderColor="primary.main" borderRadius={16}>
                        <p>
                            {<Typography variant="subTitle1" color="secondary"> Code coverage: </Typography> }
                        </p>
                        {
                            
                            Object.entries(language).map(([lan, bytes], i) => {
                                console.log(bytes);
                                percent = (parseInt(bytes)/totalBytes)*100;
                                    return (                                                            
                                        <LinearProgressWithLabel key={i} value={percent} lan={lan}/>
                                    )
                            })
                        }
                    </Box>

                </Grid>
            </Grid>
        </div>
    );
}
export default PortfolioPage;