import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import tileData from '../assests/data/tileData';
import InfoIcon from '@material-ui/icons/Info';
import {Helmet} from 'react-helmet';

import Hero from '../components/Hero';
import LoadContent from '../components/LoadContent.js';

// import Config from '../config.js';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));

function HomePage(props){
    const classes = useStyles();

    const cardClicked = (link) => {
        const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      };

    return(
        <div>
            <Helmet>
                <title>Dylan Tyrie-Dron: My home page!</title>
                <meta name="description" content="A carosel of interactive cards that will direct to social channels used to connect with me!"></meta>
            </Helmet>

            <LoadContent urls={[
                "https://www.instagram.com/doseofdylz/?__a=1",
            ]}>
            {
            ({ loading, error, data }) => {

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
                        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>                      
                        {/* <Carousel insta={data} /> */}
                        <GridList className={classes.gridList}>                          
                            {tileData.map((tile) => (
                            <GridListTile key={tile.title} cols={0.5} style={{height:'auto'}}>
                                <img src={tile.imgSrc} alt={tile.title}/>
                                <GridListTileBar
                                title={tile.title}
                                subtitle={<span>{tile.subTitle}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} onClick={() => cardClicked(tile.link)}>
                                    <InfoIcon />
                                    </IconButton>
                                }
                                />
                            </GridListTile>
                            ))}
                        </GridList>
                    </div>
                );
            }
            }
            </LoadContent>
        </div>
    );
        
}
export default HomePage;