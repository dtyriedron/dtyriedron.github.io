import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import tileData from '../assests/data/tileData';
import {Helmet} from 'react-helmet';
import '../index.css';

import Hero from '../components/Hero';

const useStyles = makeStyles((theme) => ({
    root: 
    {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: 
    {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
      margin: 'auto',
      justifyContent: 'center',
      justifySelf: 'center',
      height: '75%%',
      width: '25%'
    },
    title: 
    {
      color: theme.palette.primary.light,
    },
    titleBar: 
    {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    Hero: 
    {
      height: "25%",
    },
    image:
    {
      display: 'block',
      // "&:hover":
      // {
      //   cursor: 'pointer',
      //   transition: '.5s ease',
      //   backgroundColor: '#fffff'
      // },
    },
  }));

function HomePage(props)
{
  const classes = useStyles();

  const cardClicked = (link) => {
    const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  };


  return(
      <div>
          <Helmet>
              <title>Dylan Tyrie-Dron Portfolio Site</title>
              <meta name="description" content="A carousel of interactive cards that will direct to social channels used to connect with me."></meta>
          </Helmet>
          <div>  
              <Hero title={props.title} subTitle={props.subTitle} text={props.text} className={classes.Hero}/>                      
              {/* <Carousel insta={data} /> */}
              <ImageList className={classes.imageList} >                          
                {tileData.map((tile) => (
                    <ImageListItem key={tile.title}  className='container'>
                      <img src={tile.imgSrc} alt={tile.title} onClick={() => cardClicked(tile.link)} className={classes.image}/>
                      <div className="overlay">
                      </div>
                      <ImageListItemBar title={tile.title} subtitle={<span>{tile.subTitle}</span>} />
                    </ImageListItem>
                ))}
              </ImageList>
          </div>
      </div>
  );  
}
export default HomePage;