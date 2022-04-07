import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        flexFlow: 'column nowrap',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '5px',
        fontFamily: 'Roboto',
        borderColor: 'rgba(0,0,0,0.2)',
    },
    titles: {
        margin: '10px 0px 0px 30px',
    },
    ulTemp: {
        margin: '10px 0px 40px 30px',
    }
}));

const FiltersBox = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <div className={classes.titles}>
                <h2>Filters:</h2>
                <p>Cuisine:</p>
            </div>
            <ul className={classes.ulTemp}>
                <li>Italian</li>
                <li>Chinese</li>
                <li>Indian</li>
            </ul>
        </div>
    )
}

export default FiltersBox;