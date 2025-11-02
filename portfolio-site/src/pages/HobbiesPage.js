import React from 'react';
import Hero from '../components/Hero';
import GridLayout from '../components/GridLayout';
import LoadContent from '../components/LoadContent';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Helmet} from 'react-helmet';

import Hobbies from '../assests/data/Hobbies.json';

function HobbiesPage(props){
    return(
        <div>
            <Helmet>
                <title>Dylan Tyrie-Dron: My hobbies!</title>
                <meta name="description" content="A grid of interactive hobby cards that direct to more information on my main intersts outside of work."></meta>
            </Helmet>
                <LoadContent urls={[
                Hobbies,
            ]}>
            {
                ({ loading, error, data }) => {

                    if (loading) return (
                        <div>
                            <Hero title={props.title} />
                            <Grid container>
                                <Grid item container className="justify-content-center">
                                    <CircularProgress className="justify-content-center" animation="border"/>
                                </Grid>
                            </Grid>
                        </div>
                    );
                    if (error) return <span>Error loading</span>
                    return(
                        <div>
                            <Hero title={props.title} />
                            <GridLayout page="hobby" cards={data}/>
                        </div>
                    );
                }   
            }   
            </LoadContent>
        </div>
    );
}
export default HobbiesPage;