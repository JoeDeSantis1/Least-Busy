import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


const ElementHeader2 = (props) => {
    const { title } = props;


    const useStyles = makeStyles((theme) => ({
        root: {
            width: '70%',
            margin: '50px 10px 0px 0px',
            alignSelf: 'center',
            borderTop: '1px solid',
            borderLeft: '1px dashed',
            borderRight: '1px dashed',
        },
        elementFlex: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px'
        },
        img: {
            width: '250px',
            maxHeight: '300px',
            borderRadius: '3px'
        },
        text: {
            fontFamily: 'Roboto',
        }
    }));
    

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.elementFlex}>
                <div className={classes.text}>
                    <h2>{title}</h2>
                </div>
            </div>
        </div> 
    );
}

export default ElementHeader2;