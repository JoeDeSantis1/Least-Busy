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
            margin: '0px 10px 40px 0px',
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
            flexDirection: flexDirection,
            gap: '20px'
        },
        img: {
            width: '250px',
            maxHeight: '300px',
            borderRadius: '3px'
        },
        text: {
            fontFamily: 'Roboto',
            marginLeft: leftTextMargin,
            marginRight: rightTextMargin
        },
        list: {
            listStyleType: 'none',
            margin: '0px',
            padding: '0px'

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
                        <ul className={classes.list}>
                            <li className={classes.listItems}>Least Busy orangizes a list of your favorite restaurants from least to most busy.</li>
                            
                            <li className={classes.listItems}>You can quickly see how busy restaurants are right now or...</li>
                        </ul>                        
                        {/* <p>{desc}</p> */}
                    </div>
                </div>
            </div> 
        </Fade> 
    );
}

export default HowItWorksElement2;