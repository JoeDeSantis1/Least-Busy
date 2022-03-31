import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


const HowItWorksElement2 = (props) => {
    const { title, image, alt, desc, reverse, left, right, offset } = props;

    const flexDirection = reverse ? 'row-reverse' : 'row';
    const leftOffset = left ? offset : '0px';
    const rightOffset = right ? offset : '0px';
    const leftTextMargin = left ? '10px' : '0px';
    const rightTextMargin = right ? '10px' : '0px';

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '55%',
            height: '200px',
            margin: '10px',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderRadius: '5px',
            borderColor: 'rgba(0,0,0,0.2)',
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
            height: '200px',
            width: '250px',
            borderRadius: '3px'
        },
        text: {
            marginLeft: leftTextMargin,
            marginRight: rightTextMargin
        }
    }));
    

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.elementFlex}>
                <img src={image} alt={alt} className={classes.img}/>
                <div className={classes.text}>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </div>  
    );
}

export default HowItWorksElement2;