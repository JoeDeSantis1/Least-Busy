import React from 'react';

import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    div: {
        paddingBottom: '20px'
    },
}));


const SavedAddress = (props) => {
    const { number, street, city, state, zip, label } = props;
    const classes = useStyles();

    return(
        <div className={classes.div}>
            <Grid container alignItems='flex-start' direction='column'>
                <Typography>
                    {label}
                </Typography>
                <Typography>
                    {`${number} ${street}`} 
                </Typography>
                <Typography>
                    {`${city}, ${state} ${zip}`}
                </Typography>
            </Grid>
        </div>
    )
}

export default SavedAddress;