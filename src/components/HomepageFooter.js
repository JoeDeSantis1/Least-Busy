import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    background: {
        backgroundColor: '#6a82d4',
        width: '100%',
        marginTop: '55px',
    },
    textPadding: {
        paddingTop: '10px',
    },
    textWeight: {
        fontWeight: 300,
    },
})

const HomepageFooter = (props) => {
    const { height } = props;
    const classes = useStyles();

    return(
        <div className={classes.background} style={{height: height}}>
            <div className={classes.textPadding}>
                <Typography className={classes.textWeight} align='center' >
                    Created By: Joe DeSantis
                </Typography>
            </div>
        </div>
    )
}

export default HomepageFooter;
