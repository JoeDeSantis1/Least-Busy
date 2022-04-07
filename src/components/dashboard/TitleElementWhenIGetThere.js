import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'column nowrap',
        width: '75%',
        fontFamily: 'Roboto',
    },

}));

const TitleElementWhenIGetThere = (props) => {
    const { totalPlaceCards } = props;
    const classes = useStyles();
    
    return(
        <div className={classes.root}>
        <h2>Your Restaurants (When You Get There)</h2>
        <p>{`Showing ${totalPlaceCards > 10 ? '10' : totalPlaceCards} restaurants (${totalPlaceCards} total)`}</p>
        </div>
    )
}

export default TitleElementWhenIGetThere;