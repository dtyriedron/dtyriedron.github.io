import React from 'react';
// import { Container, Row} from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';

import Card from '../components/Card';


import github from '../assests/images/Github.png';
import strava from '../assests/images/Strava.jpeg';
import linkedIn from '../assests/images/linkedIn.jpeg';
import insta from '../assests/images/insta.jpg';

class Carousel extends React.Component{
    constructor(props){
    super(props);
        this.state={
            items:[
                {
                    id:0,
                    title: 'Instagram',
                    subTitle: 'Photo and video sharing',
                    // imgSrc: props.insta["graphql"]["user"]["profile_pic_url_hd"],
                    imgSrc: insta,
                    link: 'https://www.instagram.com/doseofdylz/',
                    selected: false
                },
                {
                    id:1,
                    title: 'GitHub',
                    subTitle: 'Software storage and sharing',
                    imgSrc: github,
                    link: 'https://github.com/dtyriedron',
                    selected: false
                },
                {
                    id:2,
                    title: 'Strava',
                    subTitle: 'Track exercise and share with others',
                    imgSrc: strava,
                    link: 'https://www.strava.com/athletes/8795009',
                    selected: false
                },
                {
                    id:3,
                    title: 'LinkedIn',
                    subTitle: 'Connect your work and business',
                    imgSrc: linkedIn,
                    link: 'https://www.linkedin.com/in/dylan-tyrie-dron-041321184/',
                    selected: false
                }
            ]
        }
    }
    

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    

    makeitems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render(){
        return(
            <Grid container>
                <Grid item xs={12} >
                    <div>
                        {this.makeitems(this.state.items)}
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default Carousel;