import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


const HowItWorksElement3 = (props) => {
    const { image, alt } = props;

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '80%',
            margin: '0px 20px 30px 10px',
            alignSelf: 'center',
        },
        elementFlex: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '60px'
        },
        imgFlex: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        img: {
            width: '250px',
            maxHeight: '166px',
            borderRadius: '3px'
        },
        text: {
            fontFamily: 'Roboto',
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
        <div className={classes.root}>
            <div className={classes.elementFlex}>
                <div className={classes.imgFlex}>
                    <img src={image} alt={alt} className={classes.img}/>
                    <p>No matter where you are</p>
                </div>
                <div className={classes.imgFlex}>
                    <img src='eating_outside.jpg' alt={alt} className={classes.img}/>
                    <p>You'll see busyness</p>
                </div>
                <div className={classes.imgFlex}>
                    <img src='phone_in_car.jpg' alt={alt} className={classes.img}/>
                    <p>For when you'll arrive.</p>
                </div>
            </div>
        </div>  
    );
}

export default HowItWorksElement3;