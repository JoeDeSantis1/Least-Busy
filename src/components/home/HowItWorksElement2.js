import React from 'react';

import { Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const HowItWorksElement2 = (props) => {
    const { title, image, alt, desc, reverse, left, right, offset, fadeTime } = props;

    const flexDirection = reverse ? 'row-reverse' : 'row';
    const leftOffset = left ? offset : '0px';
    const rightOffset = right ? offset : '0px';
    const leftTextMargin = left ? '10px' : '0px';
    const rightTextMargin = right ? '10px' : '0px';

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '80%',
            margin: '20px 10px 40px 0px',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderRadius: '5px',
            borderColor: 'rgba(0,0,0,0)',
            // marginLeft: leftOffset,
            // marginRight: rightOffset,
            alignSelf: 'center',
        },
        elementFlex: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: flexDirection,
            gap: '20px'
        },
        img: {
            width: '250px',
            maxHeight: '180px',
            borderRadius: '3px'
        },
        text: {
            fontFamily: 'Roboto',
            marginLeft: leftTextMargin,
            marginRight: rightTextMargin
        },
        p: {
            margin: '0px',
            maxWidth: '600px'
        },
        listItems: {
            marginBottom: '10px'
        }
    }));
    

    const classes = useStyles();

    return(
        <Fade 
            in
            {...(true ? { timeout: fadeTime } : {})}
        >
            <div className={classes.root}>
                <div className={classes.elementFlex}>
                    <img src={image} alt={alt} className={classes.img}/>
                    <div className={classes.text}>
                        <p className={classes.p}>{desc}</p>
                    </div>
                </div>
            </div> 
        </Fade> 
    );
}

export default HowItWorksElement2;