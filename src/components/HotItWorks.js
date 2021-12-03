import React, { useState } from 'react';

import { Typography, Grid, Card, CardActions, Button } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import HowItWorksElement from './HowItWorksElement';

import { themeHome } from '../styles/theme';

import Auth from './Auth';

const useStyles = makeStyles((theme) => ({
    signUpMargin: {
        marginTop: '20px',
    },
    card: {
        backgroundColor: `#6a82d4`,
        padding: '20px',
        width: '500px',
        [theme.breakpoints.down('sm')]: {
            width: '330px',
        },
    },
    button: {
        backgroundColor: '#4B3F72',
        color: '#FFFFFF',
        left: '37%',
        [theme.breakpoints.down('sm')]: {
            left: '31%',
        },
    },
    divMargin: {
        marginTop: '10px'
    },
    title: {
        fontFamily: 'Fugaz One', 
        fontSize: '200px',
        [theme.breakpoints.up('lg')]: {
            fontSize: '200px',
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '150px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '100px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '60px',
        },

    },
}));

const HowItWorks = () => {
    const [openAuth, setOpenAuth] = useState(false);

    const classes = useStyles();

    const handleAuthOpen = () => {
        setOpenAuth(true);
    };
  
    const handleAuthClose = () => {
        setOpenAuth(false);
    };

    return(
        <ThemeProvider theme={themeHome}>
            <Grid item>
                <Typography align='center' variant='h1' className={classes.title}>
                    Least Busy
                </Typography>
            </Grid>
            <div className={classes.divMargin}>
                <Grid item>
                    <Grid container style={{justifyContent: 'center'}}>
                        <HowItWorksElement 
                            title='Quickly see which of your favorite restaurants is the Least Busy'
                            image='HIWelement1.jpg'
                            alt='WomenLaughing'
                            desc='Least Busy orangizes a list of your favorite restaurants from least busy to most busy. You can quickly see 
                                how busy restaurants are right now or...'
                            bgColor='#6a82d4' 
                        />
                        <HowItWorksElement 
                            title='Least Busy shows how busy a restaurant will be when you get there from any address'
                            image='HIWelement2.jpeg'
                            alt='roadSigns'
                            desc="Using the 'When I Get There' feature, the list will be reorganized to show how busy the restaurants will be
                                when you arrive from a specified address." 
                            bgColor='#bba7fa' 
                        />
                        <HowItWorksElement 
                            title='Add your favorite restaurants to your profile'
                            image='ProfileScreen2.PNG'
                            alt='profileScreen'
                            desc="You can add your favorite restaurants to your profile using a Google Maps widget. You can also add
                                addresses like 'Home' or 'Work' to make the 'When I Get There' feature easier to use. Add as many restaurants and 
                                addresses as you'd like, then head to the Dashboard." 
                            bgColor='#6a82d4'
                        />
                        <HowItWorksElement 
                            title='Use the Dashboard to see which restaurants are the Least Busy'
                            image='DashboardScreen.PNG'
                            alt='dashboard'
                            desc="The Dashboard will show you an organized list of restaurants from least busy to most busy. Click on the 'When I Get There'
                                button to reorganize the list to show how busy the restaurants will be from a custom address or a saved address."
                            bgColor='#bba7fa' 
                        />
                    </Grid>
                </Grid>
                <div className={classes.signUpMargin}>
                <Grid container style={{justifyContent: 'center'}}>
                    <Grid item>
                    <Card elevation={12} className={classes.card}>
                        <Typography align='center' variant='h6' gutterBottom>
                            Sign up or Login to get started
                        </Typography>
                        <CardActions>
                            <Button onClick={handleAuthOpen} size="small" align='center' variant='contained' className={classes.button}>
                                Sign Up / Login
                            </Button>
                        </CardActions>
                    </Card>
                    </Grid> 
                </Grid>
                </div>
            </div>
            <Auth open={openAuth} onClose={handleAuthClose}/>
        </ThemeProvider>
    );
}

export default HowItWorks;