import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


const ElementHeader = (props) => {
    const { title } = props;


    const useStyles = makeStyles((theme) => ({
        root: {
            width: '80%',
            margin: '40px 10px 10px 0px',
            alignSelf: 'center',
            [theme.breakpoints.down('xs')]: {
                margin: '40px 0px 10px 0px',
            },
            
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
            [theme.breakpoints.down('xs')]: {
                textAlign: 'center',
            },
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

export default ElementHeader;