import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Hero from '../components/Hero';
import GridLayout from '../components/GridLayout';
import LoadContent from '../components/LoadContent';
import {Helmet} from 'react-helmet';

function PortfolioMainPage(props){
    return(
        <div>
            <Helmet>
                <title>Dylan Tyrie-Dron: My portfolio!</title>
                <meta name="description" content="A grid of interactive project cards that direct to more information on my public projects that are GitHub."></meta>
            </Helmet>

            <LoadContent urls={[
                "https://api.github.com/users/dtyriedron/repos",
            ]}>
            {
            ({ loading, error, data }) => {
                console.log(data);

                if (loading) return (
                    <div>
                        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
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
                        <Hero title={props.title}/>
                        <GridLayout page="project" cards={data}/>
                    </div>
                );
            }
            }
            </LoadContent>
            
        </div>
    );
    
}

export default PortfolioMainPage;