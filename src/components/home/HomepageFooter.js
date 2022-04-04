import React from 'react';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    background: {
        backgroundColor: '#0a438b',
        fontFamily: 'Roboto',
        width: '100%',
        marginTop: '55px',
    },
    textPadding: {
        paddingTop: '10px',
        textAlign: 'center',
    },
    text: {
        color: 'white',
        fontFamily: 'Roboto',
        opacity: '75%',
    },
})

const HomepageFooter = (props) => {
    const { height } = props;
    const classes = useStyles();

    return(
        <div className={classes.background} style={{height: height}}>
            <div className={classes.textPadding}>
                <h6 className={classes.text}>Created By: Joe DeSantis</h6>
            </div>
        </div>
    )
}

export default HomepageFooter;
