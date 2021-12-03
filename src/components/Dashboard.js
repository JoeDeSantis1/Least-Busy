import React, { useState, useEffect } from 'react';

import { Typography, Grid, Paper, Card, CardContent, Divider, Button, CircularProgress } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import NavBar from './NavBar';
import PlaceCard from './PlaceCard';
import AddressDialogPopover from './AddressDialogPopover';
import WarningDialogPopover from './WarningDialogPopover';
import DashboardBanner from './DashboardBanner';
import HomepageFooter from './HomepageFooter';
import { themeDashboard } from '../styles/theme';

const useStyles = makeStyles((theme) => ({
    nav: {
        paddingBottom: '70px'
    },
    paper: {
        background: 'rgba(208,234,240,0)',
        padding: theme.spacing(1),
        textAlign: 'center',
        whiteSpace: 'wrap',
        marginBottom: theme.spacing(1),
    },
    titleText: {
        fontSize: '80px',
        fontWeight: '500',
        marginBlockStart: '0px',
        marginBlockEnd: '0px',
        [theme.breakpoints.up('lg')]: {
            fontSize: '100px',
            height: '135px',
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '80px',
            height: '111px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '65px',
            height: '88px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '50px',
            height: '74px',
        },        
    },
    statusText: {
        paddingBottom: '10px',
        marginLeft: '10px',
        marginRight: '10px',
        [theme.breakpoints.up('lg')]: {
            fontSize: '30px',
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '25px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '18px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
        },   
    },
    statusTextWhenIGetThere: {
        paddingBottom: '10px',
        marginLeft: '10px',
        marginRight: '10px',
        [theme.breakpoints.up('lg')]: {
            fontSize: '28px',
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '23px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '11px',
        },   
    },
    text: {
        textAlign: 'center',
        backgroundColor: 'lightblue',
        marginBottom: theme.spacing(1),
        width: '100%',
        overflowX: 'auto'
    },
    leftButton: {
        paddingRight: '10px',
    },
    rightButton: {
        paddingLeft: '10px'
    },
    outsideCard: {
        paddingTop: '10px',
        paddingBottom: '10px',
    },
    buttonsGrid: {
        marginTop: '20px',
        marginBottom: '10px'
    },
    floatingButtons: {
        position: 'fixed',
        bottom: '14px',
        paddingRight: '20px',
        zIndex: 5
    },
    floatingButtonsBackground: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        backgroundColor: 'lightgrey',
        width: '100%',
        height: '55px',
        zIndex: 4,
    },
    divider: {
        marginTop: 10,
        width: '60%',
        [theme.breakpoints.up('lg')]: {
            width: '55%'
        },
        [theme.breakpoints.down('lg')]: {
            width: '60%'
        },
        [theme.breakpoints.down('md')]: {
            width: '75%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        }, 
    },
    loadingBox: {
        marginTop: '20px', 
        marginBottom: '20px', 
        maxWidth: '50%', 
        flexBasis: '50%',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '75%',
            flexBasis: '75%',
        }, 
    },
}));

const currentDate = new Date();

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const [isRightNow, setIsRightNow] = useState(true);
    const [placeCards, setPlaceCards] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);
    const [noPlaces, setNoPlaces] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [resetCurrentAddressValue, setResetCurrentAddressValue] = useState(false);
    const [floatingButtonsVisible, setFloatingButtonsVisible] = useState(false);
    const [warning, setWarning] = useState();
    const [selectedAddress, setSelectedAddress] = useState('');
    const classes = useStyles();

    useEffect(() => {
        const email = user.result.email;

        fetch('https://young-refuge-35360.herokuapp.com/user/userPlaces', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email})
            })
        .then(res => res.json())
        .then(data => {
            data.userPlaces ? assemblePlaceCards(data, false) : setNoPlaces(true);
            setIsLoading(false);
        })
        .catch(error => console.log(error))

        window.addEventListener('scroll', toggleFloatingButtons);

    }, [])
    
    const assemblePlaceCards = (data, isWhenIGetThere) => {
        setPlaceCards([]);

        let places;
        let counter = 0;

        if(isWhenIGetThere) {
            places = data.durations;
        } else {
            places = data.userPlaces;
        }

        places.sort((a, b) => {
            return findPopularTimeValue(a, isWhenIGetThere) - findPopularTimeValue(b, isWhenIGetThere);
        })

        if(isWhenIGetThere) {
            for(let i=0; i<places.length; i++) {
                const place = places[i];

                if(isOpen(place, true)) {
                    counter++;
                    const address = place.placeInfo.address_components;
                    const hours = findCurrentHours(place.placeInfo);
                    const completeAddress = `${address.number} ${address.street} ${address.city}, ${address.state} ${address.zip_code}`;
                    const busyTimes = findBusyTimes(place, true);
                    const placeCard = <PlaceCard 
                        name={place.placeInfo.name} 
                        address={completeAddress}
                        src={place.placeInfo.photo}
                        hours={hours}
                        phone={place.placeInfo.phone_number}
                        website={place.placeInfo.website}
                        isFirst={counter===1}
                        listNumber={counter}
                        busyTimes={busyTimes}
                        isWhenIGetThere={true}
                    />;
                    setPlaceCards(prevPlaces => {
                        return [
                            ...prevPlaces,
                            placeCard
                        ]
                    })
                }
            }
        } else {
            for(let i=0; i<places.length; i++) {
                const place = places[i];

                if(isOpen(place)) {
                    counter++;
                    const address = place.address_components;
                    const hours = findCurrentHours(place);
                    const completeAddress = `${address.number} ${address.street} ${address.city}, ${address.state} ${address.zip_code}`;
                    const busyTimes = findBusyTimes(place, false);
                    const placeCard = <PlaceCard 
                        name={place.name} 
                        address={completeAddress}
                        src={place.photo}
                        hours={hours}
                        phone={place.phone_number}
                        website={place.website}
                        isFirst={counter===1}
                        listNumber={counter}
                        busyTimes={busyTimes}
                        isWhenIGetThere={false}
                    />;
                    setPlaceCards(prevPlaces => {
                        return [
                            ...prevPlaces,
                            placeCard
                        ]
                    })
                }
            }
        }
    }

    const checkForLastElement = index => {
        if(index !== placeCards.length - 1) {
            return <Divider className={classes.divider}/>
        }
    }

    const toggleFloatingButtons = () => {
        if(window.pageYOffset > 325) {
            setFloatingButtonsVisible(true);
        } else {
            setFloatingButtonsVisible(false);
        }
    }

    const findPopularTimeValue = (obj, isWhenIGetThere) => {
        
        if(isWhenIGetThere) {
            const newDate = new Date();

            newDate.setSeconds(obj.durationToPlace);

            const day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(newDate).toLowerCase();
            const hour = newDate.getHours();

            const popularTimeValue = obj.placeInfo.popular_times[day][hour];

            return popularTimeValue;

        } else {
            const day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(currentDate).toLowerCase();
            const hour = currentDate.getHours();

            const popularTimeValue = obj.popular_times[day][hour];

            return popularTimeValue;

        }
    }

    const findBusyTimes = (obj, isWhenIGetThere) => {
        const busyArray = [];

        if(isWhenIGetThere) {
            const newDate = new Date();

            newDate.setSeconds(obj.durationToPlace);

            const day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(newDate).toLowerCase();
            const hour = newDate.getHours();
            const minutes = newDate.getMinutes();

            for(let i=-2; i <= 2; i++) {
                const newHour = hour+i;

                const popularTimeValue = obj.placeInfo.popular_times[day][newHour];

                const ampm = newHour >= 12 ? 'PM' : 'AM';
                
                const newHourFormat = `${newHour > 12 ? newHour % 12 : newHour} ${ampm}`; 

                const busyArrayElement = [newHourFormat, popularTimeValue];

                busyArray.push(busyArrayElement);
            }

            const newAMPM = hour >= 12 ? 'PM' : 'AM';    
            const newTimeFormat = `${hour > 12 ? hour % 12 : hour}`; 
            const whenIGetThereTime = [`${newTimeFormat}:${minutes < 10 ? '0' + minutes : minutes} ${newAMPM}`];

            busyArray.push(whenIGetThereTime);

            return busyArray;

        } else {
            const day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(currentDate).toLowerCase();
            const hour = currentDate.getHours();

            for(let i=-2; i <= 2; i++) {
                const newHour = hour+i;
                const popularTimeValue = obj.popular_times[day][newHour];

                const ampm = newHour >= 12 ? 'PM' : 'AM';
                
                const newHourFormat = `${newHour > 12 ? newHour % 12 : newHour} ${ampm}`;
                

                const busyArrayElement = [newHourFormat, popularTimeValue];

                busyArray.push(busyArrayElement);
            }

            return busyArray;
        }
    }

    const isOpen = (obj, isWhenIGetThere) => {
        if(isWhenIGetThere) {
            const newDate = new Date();

            newDate.setSeconds(obj.durationToPlace);

            const day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(newDate).toLowerCase();
            const hour = newDate.getHours();

            if(obj.placeInfo.popular_times[day][hour] === 0) {
                return false;
            } else {
                return true;
            }
        } else {
            const day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(currentDate).toLowerCase();
            const hour = currentDate.getHours();
        
            if(obj.popular_times[day][hour] === 0) {
                return false;
            } else {
                return true;
            }
        }
    }

    const findCurrentHours = obj => {
        if(obj.hours) {
            let hours;
            const day = currentDate.getDay() - 1;
            
            if(day === -1) {
                hours = obj.hours.weekday_text[6];
            } else {
                hours = obj.hours.weekday_text[day];
            }

            return hours;
        } else {
            return 'no business hours provided'
        }
    }

    const whenIGetThere = (address) => {
        setSelectedAddress(address);
        let formattedAddress;
        const email = user.result.email;
            
        if(address !== undefined) {
            formattedAddress = address.replace(',', '').replaceAll(' ', '+');
        }

        if(formattedAddress !== null && address !== undefined) {
            fetch('https://young-refuge-35360.herokuapp.com/places/findTimeToPlace', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({address: formattedAddress, email: email})
                })
            .then(res => res.json())
            .then(data => {
                assemblePlaceCards(data, true)
            })
            .catch(error => {
                console.log(error)
            })
        }

        setIsRightNow(false);
        window.scrollTo(0, 0);
    }
    
    const rightNow = () => {
        if(isRightNow && !noPlaces) {
            setWarning('You are already seeing the current least busy-ness');
            setOpenWarning(true);
        } else if(isRightNow && noPlaces){
            setWarning('You need to add some restaurants to see which is least busy');
            setOpenWarning(true);
        } else {
            const email = user.result.email;

            fetch('https://young-refuge-35360.herokuapp.com/user/userPlaces', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: email})
                })
            .then(res => res.json())
            .then(data => {
                assemblePlaceCards(data, false)
            })
            .catch(error => console.log(error))

            setIsRightNow(true);
        }

        setResetCurrentAddressValue(true);
        window.scrollTo(0, 0);
    }

    const handleDialogOpen = () => {
        setOpenDialog(true);
    };
    
    const handleDialogClose = (value) => {
        if (value === undefined) {
            setOpenDialog(false);
            setOpenWarning(false);    
        } else {
            setOpenDialog(false);
            whenIGetThere(value);
        }
    };

    const handleResetCurrentAddress = () => {
        setResetCurrentAddressValue(false);
    };

    return(
        <ThemeProvider theme={themeDashboard}>
        <div className={classes.root}>
            <div className={classes.nav}>
                <NavBar />
            </div>
            <div>
                <DashboardBanner />
            </div>
            <div>
                <Typography className={classes.titleText} align='center'>
                    Dashboard
                </Typography>
            </div>
            {isRightNow ?
                <Typography className={classes.statusText} align='center' variant='h5'>
                    You are seeing how busy the restaurants are right now (if they are open)
                </Typography>
                :
                <div>
                    <Typography className={classes.statusTextWhenIGetThere} align='center' variant='h5' >
                        You are seeing how busy the restaurants will be when you get there
                    </Typography>
                    <Typography className={classes.statusTextWhenIGetThere} align='center' variant='h5'>
                        from {selectedAddress}
                    </Typography>
                </div>
            }
            <Grid className={classes.buttonsGrid} container justify='center'>
                <Grid item className={classes.leftButton}>
                    <Button onClick={rightNow} variant='contained' color='primary' size='small'>
                        Right Now
                    </Button>
                </Grid>
                <Grid item className={classes.rightButton}>
                    <Button onClick={handleDialogOpen} variant='contained' color='primary' size='small'>
                        When I get there
                    </Button>
                </Grid>
                <AddressDialogPopover open={openDialog} onClose={handleDialogClose} noPlaces={noPlaces} resetCurrentAddressValue={resetCurrentAddressValue} handleResetCurrentAddress={handleResetCurrentAddress} />
                <WarningDialogPopover open={openWarning} onClose={handleDialogClose} warning={warning} />
            </Grid>
            {floatingButtonsVisible && 
                <div className={classes.floatingButtonsBackground}>
                    <Grid className={classes.floatingButtons} container justify='center'>
                        <Grid item className={classes.leftButton} style={{paddingLeft: '20px'}}>
                            <Button onClick={rightNow} variant='contained' color='primary' size='small'>
                                Right Now
                            </Button>
                        </Grid>
                        <Grid item className={classes.rightButton}>
                            <Button onClick={handleDialogOpen} variant='contained' color='primary' size='small'>
                                When I get there
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            }
            <Grid container justify='center' spacing={0}>
                {isLoading ?
                    <Grid item sm={6} className={classes.loadingBox}>
                        <Card className={classes.text} raised>
                            <CardContent>
                                <Typography style={{marginBottom: '20px'}}>Loading Restaurants...</Typography>
                                <CircularProgress color='inherit'/>
                            </CardContent>
                        </Card>
                    </Grid>
                    :
                    noPlaces ? 
                        <Grid item sm={6} style={{marginTop: '20px', marginBottom: '20px', maxWidth: '1024px', flexBasis: '75%'}}>
                            <Card className={classes.text} raised>
                                <CardContent>
                                    <Typography>Doesn't look like you've added any restaurants yet!</Typography>
                                    <Typography>Head to your profile to add restaurants!</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        : placeCards.length === 0 ?
                            <Grid item sm={6} style={{marginTop: '20px', marginBottom: '20px', maxWidth: '1024px', flexBasis: '75%'}}>
                                <Card className={classes.text} raised>
                                    <CardContent>
                                        <Typography>None of your restaurants are open right now!</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            :
                            <Grid item sm={6} style={{flexBasis: '75%', maxWidth: '75%'}}>
                                <Paper className={classes.paper} elevation={0}>
                                    {placeCards.map((placeCard, index) => {
                                        return <div key={index} className={classes.outsideCard} align='center'>
                                                {placeCard}
                                                {checkForLastElement(index)}
                                        </div>
                                        })
                                    }
                                </Paper>
                            </Grid>
                }
            </Grid>
            <Grid container>
                <HomepageFooter height='100px'/>
            </Grid>
        </div>
        </ThemeProvider>
    )
}

export default Dashboard;