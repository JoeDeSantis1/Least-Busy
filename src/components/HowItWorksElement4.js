import React from 'react';

import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    paper1: {
        backgroundColor: '#9b84e3',
        position: 'absolute',
        justifyContent: 'right',
        height: '900px',
        width: '1200px',
        left: '40%',
    },
    paper2: {
        backgroundColor: '#bba7fa',
        position: 'absolute',
        height: '900px',
        width: '1250px',
        left: '35.5%',
        marginTop: '60px',
    },
    text: {
        position: 'absolute',
        fontWeight: 'bold',
        top: '150px',
        left: '780px',
    },
    grid: {
        position: 'absolute',
        flexWrap: 'nowrap',
        height: '300px',
        width: '400px',
        top: '400px',
        left: '833px',
    },
    imgPaper: {
        position: 'absolute',
        backgroundImage: 'url(https://images.pexels.com/photos/5845736/pexels-photo-5845736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1160)',
        backgroundPositionY: '-625px',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: '#bba7fa',
        boxShadow: '0 7px 7px 7px #bba7fa inset',
        height: '700px',
        width: '1050px',
        top: '215px',
        left: '765px',
    }
})

const HowItWorksElement4 = (props) => {
    const { margin } = props;
    const classes = useStyles();

    return(
        <div style={{ 'margin-top': margin}}>
            <Paper className={classes.paper1} elevation={5} />
            <Paper className={classes.paper2} elevation={24} />
            <Typography className={classes.text} variant='h4' color='inherit'>
                Then use the Dashboard to see which restaurant is the Least Busy  
            </Typography>
            <img src='DashboardScreen.PNG' alt='profile' className={classes.imgPaper} />
            {/* <Paper className={classes.imgPaper} elevation={0} square /> */}
        </div>
    )
}

export default HowItWorksElement4;