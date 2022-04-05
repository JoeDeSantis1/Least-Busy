import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


const HowItWorksElement2 = (props) => {
    const { image, alt, desc, reverse, left, right } = props;

    const flexDirection = reverse ? 'row-reverse' : 'row';
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
            alignSelf: 'center',
            [theme.breakpoints.down('xs')]: {
                margin: '0px 0px 40px 0px',
            },
        },
        elementFlex: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: flexDirection,
            gap: '20px',
            [theme.breakpoints.down('xs')]: {
                flexWrap: 'wrap',
            },
        },
        img: {
            width: '250px',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderRadius: '3px',
            borderColor: 'rgba(0,0,0,0.2)',
            maxHeight: '178px',
        },
        text: {
            fontFamily: 'Roboto',
            marginLeft: leftTextMargin,
            marginRight: rightTextMargin,
            [theme.breakpoints.down('xs')]: {
                textAlign: 'center',
            },
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
        <div className={classes.root}>
            <div className={classes.elementFlex}>
                <img src={image} alt={alt} className={classes.img}/>
                <div className={classes.text}>
                    <p className={classes.p}>{desc}</p>
                </div>
            </div>
        </div>  
    );
}

export default HowItWorksElement2;