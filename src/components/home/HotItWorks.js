import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Auth from '../auth/Auth';
import ElementHeader from './ElementHeader';
import ElementHeader2 from './ElementHeader2';
import HowItWorksElement2 from './HowItWorksElement2';
import HowItWorksElement3 from './HowItWorksElement3';
import HowItWorksElement4 from './HowItWorksElement4';
import LoginBox from './LoginBox';

const useStyles = makeStyles((theme) => ({
    signUpMargin: {
        marginTop: '20px',
    },
    card: {
        backgroundColor: `#6a82d4`,
        padding: '20px',
        width: '500px',
        [theme.breakpoints.down('sm')]: {
            width: '330px',
        },
    },
    button: {
        backgroundColor: '#4B3F72',
        color: '#FFFFFF',
        left: '37%',
        [theme.breakpoints.down('sm')]: {
            left: '31%',
        },
    },
    divMargin: {
        marginTop: '10px'
    },
    title: {
        fontFamily: 'Fugaz One', 
        fontSize: '200px',
        [theme.breakpoints.up('lg')]: {
            fontSize: '200px',
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '150px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '100px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '60px',
        },
    },
    hr: {
        width: '70%',
        margin: '10px 0px 10px 0px',
        borderTop: '1px solid',
        alignSelf: 'center'
    }
}));

const HowItWorks = () => {
    const [openAuth, setOpenAuth] = useState(false);

    const classes = useStyles();

    const handleAuthOpen = () => {
        setOpenAuth(true);
    };
  
    const handleAuthClose = () => {
        setOpenAuth(false);
    };

    return(
        <>
            <ElementHeader 
                title='The easy way to see which of your favorite restaurants is the Least Busy right now'
            />
            <HowItWorksElement2 
                image='HIWelement1.jpg'
                alt='WomenLaughing'
                desc='Least Busy orangizes a list of your favorite restaurants from least busy to most busy. You can quickly see 
                    how busy restaurants are right now...'
                right
                offset='15%'
                fadeTime={6500}
            />
            <hr className={classes.hr} />
            <ElementHeader 
                title='Or see how busy a restaurant will be when you get there from any address'
            />
            <HowItWorksElement3 
                image='HIWelement2.jpeg'
                alt='roadSigns'
                desc="Using the 'When I Get There' feature, the list will be reorganized to show how busy the restaurants will be
                    when you arrive from a specified address." 
                left
                fadeTime={7000}
            />
            <ElementHeader2 
                title='Add your favorite restaurants to your profile'
            />
            <HowItWorksElement4 
                image='ProfileScreen2.PNG'
                alt='profileScreen'
                desc="You can add your favorite restaurants to your profile using a Google Maps widget. You can also add
                    addresses like 'Home' or 'Work' to make the 'When I Get There' feature easier to use. Add as many restaurants and 
                    addresses as you'd like, then head to the Dashboard." 
                reverse
                fadeTime={7500}
            />
            <ElementHeader 
                title='Use the Dashboard to see which restaurants are the Least Busy'
            />
            <HowItWorksElement2 
                image='DashboardScreen.PNG'
                alt='dashboard'
                desc="The Dashboard will show you an organized list of restaurants from least busy to most busy. Click on the 'When I Get There'
                    button to reorganize the list to show how busy the restaurants will be from a custom address or a saved address."
                left
                offset='15%'
                fadeTime={8000}
                marginBottom={40}
            />
            <LoginBox handleAuthOpen={handleAuthOpen}/>
            <Auth open={openAuth} onClose={handleAuthClose}/>
        </>
    );
}

export default HowItWorks;