import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';

import Project from '../pages/PortfolioPage';
// import Achievement from '../Achievement.js';
// import Hobby from '../Hobby.js';

function GridLayout(props){
    // function handleClick(pos) {     
    //     const home = process.env.PUBLIC_URL + '';
    //     document.location = `${home}/${props.page}/?pos=${pos}`;
    // }

    function handleClick(pos){
        return(
            <Redirect to={process.env.PUBLIC_URL +`/${props.page}/?pos=${pos}`}/>
        );
    }

    return(
        <BrowserRouter >
            <Grid container className="justify-content-center" style={{padding: '1rem'}}>
                    {/* <Trail cards={Object.entries(props.cards)}> */}
                        {
                            Object.entries(props.cards).map(([pos, card], i) => {
                                return (
                                    <Card style={{width: '16rem', margin: '1rem'}} key={i}>
                                        <CardHeader
                                            title={<Typography variant="h6" color="primary">{card.name}</Typography>}
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="secondary" component="p">
                                                {card.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Link to={process.env.PUBLIC_URL +`/${props.page}/?pos=${pos}`} style={{ textDecoration: 'none' }} >
                                            {/* color: `${mainSecondaryColor}` */}
                                                <Button size="small" color="primary" style={{bottom:'0'}} onClick={() =>handleClick}>
                                                    {props.page + " page"}
                                                </Button>
                                            </Link>
                                            <Route path = {process.env.PUBLIC_URL + `/${props.page}/?pos=${pos}`}>
                                            {/* render={()=> <Project pos={pos}/>} */}
                                            <Project pos={pos} name={card.name} description={card.description} />
                                            </Route>
                                        </CardActions>
                                    </Card>
                                )
                            })
                        }
                    {/* </Trail> */}
            </Grid>
        </BrowserRouter>
    );
}

export default GridLayout;