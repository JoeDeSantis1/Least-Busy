import React, { useState, useEffect } from 'react';

import { Typography, Card, CardHeader, CardActions, CardMedia, CardContent } from '@material-ui/core';
import { Collapse, IconButton,  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import BusyChart from './BusyChart';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(128deg, rgba(152,168,255,1) 0%, rgba(121,142,255,1) 56%, rgba(98,122,255,1) 100%)',
        maxWidth: 705,
        [theme.breakpoints.up('lg')]: {
            maxWidth: 840,
        },
        [theme.breakpoints.down('lg')]: {
            maxWidth: 730,
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: 630,
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: 705,
        }, 
    },
    isFirstBanner: {
        fontWeight: 400,
        borderStyle: 'solid',
        borderWidth: '4px',
        borderColor: 'red',
        backgroundColor: 'gold',
        padding: '3px',
    },
    isFirstMedia: {
        height: 0,
        paddingTop: '35.25%',
        [theme.breakpoints.up('lg')]: {
            paddingTop: '27.25%',
        },
        [theme.breakpoints.down('lg')]: {
            paddingTop: '27.25%',
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: '29.25%',
        },
        [theme.breakpoints.down('sm')]: {
            paddingTop: '35.25%',
        }, 
    }, 
    media: {
        height: 0,
        paddingTop: '39.25%',
        [theme.breakpoints.up('lg')]: {
            paddingTop: '29.25%',
        },
        [theme.breakpoints.down('lg')]: {
            paddingTop: '31.25%',
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: '31.25%',
        },
        [theme.breakpoints.down('sm')]: {
            paddingTop: '39.25%',
        }, 
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    whenIGetThereTime: {
        fontWeight: 'bold',
        paddingBottom: '10px'
    }, 
    cardHeader: {
        paddingBottom: '6px',
    }
}));

const PlaceCard = (props) => {
    const { name, address, src, hours, phone, website, isFirst, listNumber, busyTimes, isWhenIGetThere } = props;
    const classes = useStyles();
    const screenSize = window.screen.width;
    const [expanded, setExpanded] = useState(false);
    const [screenLarge, setScreenLarge] = useState(null);

    useEffect(() => {
        window.addEventListener('resize', screenChange);
    }, []);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const screenChange = () => {
        if(window.screen.width < 500) {
            setScreenLarge(false);
        } else {
            setScreenLarge(true);
        }
    }

    const displayBanner = (isFirst) => {
        if(isFirst) {
            return <div>
                {console.log(screenSize)}
                <CardContent style={{paddingBottom: '0px'}}>
                    <Typography className={classes.isFirstBanner}>
                        Least Busy
                    </Typography>
                </CardContent>
                <CardHeader
                    title={name}
                    subheader={address}
                    className={classes.cardHeader}
                />
                { isWhenIGetThere && 
                    <Typography className={classes.whenIGetThereTime} variant='body1' align='center'>
                        You would arrive around {`${busyTimes[5]}`}
                    </Typography>
                }    
                <CardMedia
                    className={classes.isFirstMedia} 
                    image={src}
                    title='restaurant image'
                >
                </CardMedia>
            </div>
        } else {
            return <div>
                <CardHeader
                    title={name}
                    subheader={address}
                    className={classes.cardHeader}
                />
                { isWhenIGetThere && 
                    <Typography className={classes.whenIGetThereTime} variant='body1' align='center'>
                        You would arrive around {`${busyTimes[5]}`}
                    </Typography>
                }  
                <CardMedia
                    className={classes.media} 
                    image={src}
                    title='restaurant image'
                >
                </CardMedia>
            </div>
        }
    }

    const removeDayOfWeek = (hours) => {
        const dayIndex = hours.indexOf(' ');

        const newHours = hours.slice(dayIndex);

        return newHours;
    }

    return(
        <div>
        <Typography align='center' variant='h6'>{isFirst ? `#${listNumber} Least Busy!` : `#${listNumber}`}</Typography>    
        <Card className={classes.root} elevation={12}>
            {displayBanner(false)}
            <CardContent style={{paddingBottom: '0px'}}>
                <BusyChart busyTimes={busyTimes} screenLarge={screenLarge} screenSize={screenSize}/>
            </CardContent>
            <CardActions style={{justifyContent: 'flex-end'}}>
                <Typography>
                    Restaurant Info
                </Typography>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent style={{paddingTop: '5px', paddingBottom: '24px'}}>
                    <Typography variant='body1' align='center'>
                        Hours Today:
                    </Typography>
                    <Typography variant='body1' align='center' gutterBottom>
                        {removeDayOfWeek(hours)}
                    </Typography>
                    <Typography variant='body1' align='center'>
                        Phone:
                    </Typography>
                    <Typography variant='body1' align='center' gutterBottom>
                        {phone}
                    </Typography>  
                    <Typography variant='body1' align='center'>
                        Website:
                    </Typography>
                    <Typography variant='body1' align='center' gutterBottom>
                        {website ? <a href={website} target='_blank' rel="noreferrer noopener">{website.substring(0,40)}{website.length > 40 && '...' }</a> : 'No Website'}
                    </Typography>
                </CardContent>
            </Collapse>
            </Card>
        </div>
    )
}

export default PlaceCard;
