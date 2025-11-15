import React, { useState } from 'react';
import {Router, Route, Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import './App.css';
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Switch from "@material-ui/core/Switch";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Container from '@material-ui/core/Container';
import {Helmet} from 'react-helmet';

import AboutIcon from "@material-ui/icons/Info";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";
import Favoriteicon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange
} from "@material-ui/core/colors";

import Home from './pages/HomePage';
import About from './pages/AboutPage';
// import Contact from './pages/ContactPage';
import Portfolio from './pages/PortfolioMainPage';
import Achievements from './pages/AchievementsPage';
import Hobbies from './pages/HobbiesPage';
import Project from './pages/PortfolioPage';

import history from './History';
import Footer from './components/Footer';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

function App(){
  const [open, setOpen] = useState(true);
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ?  "light" : "dark";
  const mainPrimaryColor = darkState ? lightBlue[500] : orange[500];
  const mainSecondaryColor = darkState ? deepPurple[500] : deepOrange[900];
  const classes = useStyles();
  const darkTheme = createTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  clsx(classes.paper, classes.fixedHeight);

  const mainListItems = (
    <div>
      <Link to={process.env.PUBLIC_URL + '/'} style={{ color: `${mainSecondaryColor}`, textDecoration: 'none' }} >
        <ListItem button >
          <ListItemIcon>
            <HomeIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Home"/>
        </ListItem>
      </Link>
      <Link to={process.env.PUBLIC_URL + '/about'} style={{  color: `${mainSecondaryColor}`,textDecoration: 'none' }}>
        <ListItem button >
          <ListItemIcon>
            <AboutIcon color="primary"/>
          </ListItemIcon>
          <ListItemText primary="About"/>
        </ListItem>
      </Link>
      <Link to={process.env.PUBLIC_URL + '/portfolio'} style={{  color: `${mainSecondaryColor}`,textDecoration: 'none' }}>
        <ListItem button >
          <ListItemIcon>
            <WorkIcon color="primary"/>
          </ListItemIcon>
          <ListItemText primary="Portfolio"/>
        </ListItem>
      </Link>
      <Link to={process.env.PUBLIC_URL + '/achievements'} style={{  color: `${mainSecondaryColor}`,textDecoration: 'none' }}>
        <ListItem button >
          <ListItemIcon>
            <StarIcon color="primary"/>
          </ListItemIcon>
          <ListItemText primary="Achievements"/>
        </ListItem>
      </Link>
      <Link to={process.env.PUBLIC_URL + '/hobbies'} style={{  color: `${mainSecondaryColor}`,textDecoration: 'none' }}>
        <ListItem button >
          <ListItemIcon>
            <Favoriteicon color="primary"/>
          </ListItemIcon>
          <ListItemText primary="Hobbies"/>
        </ListItem>
      </Link>
    </div>
  );
  
  return (
    <ThemeProvider theme= {darkTheme} >
      <div className={classes.root}>
        <Helmet>
          <title>Dylan Tyrie-Dron: My website!</title>
          <meta name="description" content="A simple React website showcasing where to connect with me, my experiences, achievements and hobbies."></meta>
        </Helmet>
      <CssBaseline />
        <Router history={history}>
          <AppBar position="absolute"
            className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
                className={clsx(
                  classes.menuButton,
                  open && classes.menuButtonHidden
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title} color="inherit">
                Dylan Tyrie-Dron
              </Typography>
              <Switch checked={darkState} onChange={handleThemeChange} />
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
            }}
            open={open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <List>{mainListItems}</List>
            
          </Drawer>
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container maxWidth="lg" className={classes.container}>
                <Grid>
                  <Route exact path={process.env.PUBLIC_URL + '/'} render={()=> <Home title="Dylan Tyrie-Dron" subTitle='Software Engineer' color="inherit"/>} />
                  <Route path={process.env.PUBLIC_URL + '/about'} render={()=> <About title='About me'/>}/>
                  <Route path={process.env.PUBLIC_URL + '/portfolio'} render={()=> <Portfolio title='My Projects' />}/>
                  <Route path={process.env.PUBLIC_URL + '/achievements'} render={()=> <Achievements title='My Achievements'/>}/>
                  <Route path={process.env.PUBLIC_URL + '/hobbies'} render={()=> <Hobbies title='My Interests' />}/>
                  <Route path={process.env.PUBLIC_URL + '/project'} render={()=> <Project />}/>
                  {/* <Route path={process.env.PUBLIC_URL + '/contact'} render={()=> <Contact title={this.state.contact.title}/>}/>
                  <Route path={process.env.PUBLIC_URL + '/achievement'} render={() => <Achievement/>}/>
                  <Route path={process.env.PUBLIC_URL + '/hobby'} render={() => <Hobby/>}/> */}
                </Grid>              
            </Container>
            <Footer color="inherit"/>
          </main>
      </Router>
      </div>
    </ThemeProvider >
  );
}

export default App;
