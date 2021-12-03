import React from 'react';

import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    paper1: {
        backgroundColor: '#0e2d96',
        position: 'absolute',
        height: '700px',
        width: '1200px',
        left: '-10px',
    },
    paper2: {
        backgroundColor: '#6a82d4',
        position: 'absolute',
        height: '700px',
        width: '1250px',
        left: '20px',
        marginTop: '60px',
    },
    text: {
        position: 'absolute',
        fontWeight: 'bold',
        top: '100px',
        left: '300px',
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
        position: 'absolute',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: '#6a82d4',
        boxShadow: '0 7px 7px 7px #6a82d4 inset',
        height: '500px',
        width: '1050px',
        top: '165px',
        left: '108px',
    }
})

const HowItWorksElement3 = (props) => {
    const { margin } = props;
    const classes = useStyles();

    return(
        <div style={{ 'margin-top': margin}}>
            <Paper className={classes.paper1} elevation={5} />
            <Paper className={classes.paper2} elevation={24} />
            <Typography className={classes.text} variant='h4' color='inherit'>
                Add your favorite restaurants to your profile
            </Typography>
            <img src='ProfileScreen2.PNG' alt='profile' className={classes.imgPaper} />
            {/* <Paper className={classes.imgPaper} elevation={0} square/> */}
            {/* <Grid className={classes.grid}>    
             <img src='HIWelement1.jpg' alt='PeopleLaughing' className={classes.img} />
            </Grid> */}
        </div>
    )
}

export default HowItWorksElement3;