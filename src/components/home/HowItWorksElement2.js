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
            width: '55%',
            margin: '10px',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderRadius: '5px',
            borderColor: 'rgba(0,0,0,0)',
            marginLeft: leftOffset,
            marginRight: rightOffset,
            alignSelf: 'center',
        },
        elementFlex: {
            display: 'flex',
            flexDirection: flexDirection,
            gap: '20px'
        },
        img: {
            width: '250px',
            maxHeight: '300px',
            borderRadius: '3px'
        },
        text: {
            marginLeft: leftTextMargin,
            marginRight: rightTextMargin
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
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                </div>
            </div> 
        </Fade> 
    );
}

export default HowItWorksElement2;