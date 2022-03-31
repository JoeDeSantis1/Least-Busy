import React from 'react';

import { Typography, Grid, Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '1100px',
        height: '570px',
        margin: '20px',
        [theme.breakpoints.up('lg')]: {
            maxWidth: '1100px',
        },
        [theme.breakpoints.down('lg')]: {
            maxWidth: '1100px',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '900px',
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: '700px',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '350px',
            height: '550px',
        },
    },    
    media: {
        height: 350,
        [theme.breakpoints.down('sm')]: {
            maxWidth: '300px',
            height: '250px',
        },
    },
    gridPadding: {
        padding: '6px',
    }
}));

const HowItWorksElement = (props) => {
    const { title, image, alt, desc, bgColor } = props;
    const classes = useStyles();

    return(
        <Grid item className={classes.gridPadding}>
            <div>
                <h3>{title}</h3>
                <img src={image} alt={alt} />
                <p>{desc}</p>
            </div>
            {/* <Card className={classes.root} elevation={12} align='center' style={{backgroundColor: `${bgColor}`}}>
                <CardHeader
                    title={title}
                />
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={alt}
                />
                <CardContent>
                    <Typography variant='body1' align='center' color='textSecondary' component='p'>
                        {desc}
                    </Typography>
                </CardContent>
            </Card> */}
        </Grid>  
    )
}

export default HowItWorksElement;