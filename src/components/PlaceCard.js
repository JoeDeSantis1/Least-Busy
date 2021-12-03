import React from 'react';

import { Typography, Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BusyChart from './BusyChart';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(270deg, rgba(152,168,255,1) 0%, rgba(121,142,255,1) 56%, rgba(98,122,255,1) 100%)',
        height: '200px',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    img: {
        width: '270px',
        height: '200px',
        padding: '10px',
    },
    content: {
        width: '270px',
        height: '200px',
        padding: '10px',
        paddingTop: '5px'
    },
    placeInfo: {
        width: '270px',
        height: '200px',
        paddingTop: '5px',
        marginLeft: '40px'
    },
    cover: {
        width: 151,
    },
    text: {
        color: '#4B3F72'     
    },
    overlay: {
        position: 'relative',
        opacity: 0.85,
        height: 250,
        width: 300
    },
    graph: {
        paddingTop: '10px',
        paddingRight: '20px',
        height: '125px',
        width: '325px',
    },
    grid: {
        flexWrap: 'wrap',
    },
    whenIGetThereTime: {
        fontWeight: 'bold'
    }
}));

const PlaceCard = (props) => {
    const { name, address, src, hours, phone, website, isFirst, busyTimes, isWhenIGetThere } = props;
    const classes = useStyles();

    const displayBanner = (show) => {
        if(show) {
            return <img src='leastBusyExampleBanner.png' alt='Banner Overlay' className={classes.overlay} />
        }
    }

    const removeDayOfWeek = (hours) => {
        const dayIndex = hours.indexOf(' ');

        const newHours = hours.slice(dayIndex);

        return newHours;
    }

    return(
        <div className={classes.div}>
          <Card className={classes.root} raised={true}>
          <Grid container className={classes.grid} spacing={0}>
              <Grid item>
                
                <CardMedia
                    className={classes.content}
                    image={src}
                    title="friends"
                >
                {displayBanner(isFirst)}
                </CardMedia>
              </Grid>
              <Grid item>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                            <Typography variant="h5" component="h2" align='left'>
                                {name}
                            </Typography>
                            <Typography variant="body2" component="p" align='left'>
                                {address}
                            </Typography>
                            <div className={classes.graph}>
                                <BusyChart busyTimes={busyTimes} />
                            </div>
                    </CardContent>
                </div>
              </Grid>
              <Grid item>
                <div>
                    <CardContent className={classes.placeInfo}>
                        <Typography variant='body1' align='left'>
                            Hours Today: {removeDayOfWeek(hours)}
                        </Typography>
                        <Typography variant='body1' align='left'>
                            Phone: {phone}
                        </Typography>  
                        <Typography variant='body1' align='left' gutterBottom>
                            Website: {website ? <a href={website}>{website.substring(0,28)}{website.length > 28 && '...' }</a> : 'No Website'}
                        </Typography>
                        { isWhenIGetThere && 
                        <Typography className={classes.whenIGetThereTime} variant='body1' align='left'>
                            You would arrive around {`${busyTimes[5]}`}
                        </Typography>
                        }
                    </CardContent>
                </div>
              </Grid>
              </Grid>
          </Card>
          </div>
    )
}

export default PlaceCard;
