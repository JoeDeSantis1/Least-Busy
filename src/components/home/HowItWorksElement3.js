import React from 'react';

import { Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';




const HowItWorksElement3 = (props) => {
    const { title, image, alt } = props;

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '80%',
            margin: '0px 20px 30px 10px',
            // marginLeft: leftOffset,
            // marginRight: rightOffset,
            alignSelf: 'center',
        },
        elementFlex: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            // flexDirection: flexDirection,
            gap: '20px'
        },
        imgFlex: {
            display: 'flex',
            flexDirection: 'column',
        },
        imgFlex2: {
            display: 'flex',
            flexDirection: 'column',
            [theme.breakpoints.down('md')]: {
                flex: '0 0 100%',
                order: 3
            },
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
            {...(true ? { timeout: 1000 } : {})}
        >
            <div className={classes.root}>
                <div className={classes.elementFlex}>
                    <div className={classes.imgFlex}>
                        <img src={image} alt={alt} className={classes.img}/>
                        <p>Something</p>
                    </div>
                    <div className={classes.imgFlex}>
                        <img src={image} alt={alt} className={classes.img}/>
                        <p>Something</p>
                    </div>
                    <div className={classes.imgFlex}>
                        <img src={image} alt={alt} className={classes.img}/>
                        <p>Something</p>
                    </div>
                </div>
            </div> 
        </Fade> 
    );
}

export default HowItWorksElement3;