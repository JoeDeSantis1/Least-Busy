import React, { useState } from 'react';

import { Typography, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Auth from './Auth';

const useStyles = makeStyles({
    paper1: {
        backgroundColor: '#0e2d96',
        position: 'absolute',
        height: '250px',
        width: '1200px',
        left: '355px',
    },
    paper2: {
        backgroundColor: '#6a82d4',
        position: 'absolute',
        height: '250px',
        width: '1150px',
        left: '380px',
        marginTop: '30px',
    },
    text: {
        position: 'absolute',
        fontWeight: 'bold',
        top: '100px',
        left: '715px',
    },
    grid: {
        position: 'absolute',
        flexWrap: 'nowrap',
        height: '100px',
        width: '200px',
        top: '300px',
        left: '125px',
    },
    imgPaper: {
        height: '50px',
        witdh: '700px',
        top: '175px',
        left: '885px',
    }
})

const HowItWorksElement5 = (props) => {
    const { margin } = props;
    const [openAuth, setOpenAuth] = useState(false);
    const classes = useStyles();

    const handleAuthOpen = () => {
        setOpenAuth(true);
    };
  
    const handleAuthClose = () => {
        setOpenAuth(false);
    };

    return(
        <div style={{ 'margin-top': margin}}>
            <Paper className={classes.paper1} elevation={5} />
            <Paper className={classes.paper2} elevation={24} />
            <Typography className={classes.text} variant='h4' color='inherit'>
                Sign Up or Login to get started!
            </Typography>
            <Button variant='contained' color='secondary' className={classes.imgPaper} onClick={handleAuthOpen}>Sign Up/Login</Button>
            <Auth open={openAuth} onClose={handleAuthClose}/>
        </div>
    )
}

export default HowItWorksElement5;