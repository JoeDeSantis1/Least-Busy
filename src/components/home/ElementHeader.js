import React from 'react';

import { Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const ElementHeader = (props) => {
    const { title, image, alt, desc } = props;


    const useStyles = makeStyles((theme) => ({
        root: {
            width: '55%',
            margin: '10px 10px 0px 0px',
            alignSelf: 'center',
        },
        elementFlex: {
            display: 'flex',
            // flexDirection: flexDirection,
            gap: '20px'
        },
        img: {
            width: '250px',
            maxHeight: '300px',
            borderRadius: '3px'
        },
        text: {
            fontFamily: 'Roboto',
            // marginLeft: leftTextMargin,
            // marginRight: rightTextMargin
        }
    }));
    

    const classes = useStyles();

    return(
        <Fade 
            in
            {...(true ? { timeout: 1000 } : {})}
        >
            <div className={classes.root}>
                <div className={classes.elementFlex}>
                    <div className={classes.text}>
                        <h2>{title}</h2>
                    </div>
                </div>
            </div> 
        </Fade> 
    );
}

export default ElementHeader;