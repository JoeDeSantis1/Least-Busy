import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
})

const ProfileBackground = () => {
    const classes = useStyles();
    
    return(
        <div>
            <img src='DashboardBanner_scaled.jpg' alt='profileBanner' className={classes.root} />
        </div>
    );
}

export default ProfileBackground;