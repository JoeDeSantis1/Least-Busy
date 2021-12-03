import React from 'react';

import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '4000px',
        minWidth: '200px',
        maxWidth: '100%',
        maxHeight: '250px',
        objectFit: 'cover',
        padding: '0px',
        margin: '0px',
        position: 'absolute',
    },
    backgroundTopPaper: {
        backgroundImage: 'url(https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
        backgroundPositionY: '-650px',
        position: 'relative',
        width: '100%',
        height: '150px'
    },
    backgroundBottomPaper: {
        backgroundColor: 'white',
        position: 'absolute',
        width: '100%',
        height: '410px'
    }
}))

const ProfileBackground = () => {
    const classes = useStyles();
    
    return(
        <div>
            {/* <Paper className={classes.backgroundBottomPaper} square={true} elevation={0} /> */}
            <img src='DashboardBanner_scaled.jpg' alt='profileBanner' className={classes.root} />
        </div>
    );
}

export default ProfileBackground;