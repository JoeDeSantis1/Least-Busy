import React from 'react';

import { Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const ElementHeader2 = (props) => {
    const { title, image, alt, desc } = props;


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

export default ElementHeader2;