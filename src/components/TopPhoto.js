import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography, Grid, FormHelperText, Fade } from '@material-ui/core';
import Carousel from 'react-slick';

import { themeHome } from '../styles/theme';

const useStyles = makeStyles({
  root: {
    width: '4000px',
    minWidth: '200px',
    maxWidth: '100%',
    maxHeight: '250px',
    objectFit: 'cover',
    padding: '0px',
    margin: '0px',
    paddingBottom: 0
  },
  divMargin: {
    marginTop: '64px',
  },
  media: {
    maxWidth: '100%',
    height: 450,
    paddingBottom: 0,
  },
  text: {
    position: 'absolute',
    fontFamily: 'Fugaz One',
    color: 'white',
    fontSize: '150px',
    top: '145px',
    left: '560px',
    zIndex: 2
  },
  div: {
    position: 'absolute',
    backgroundColor: '#0e2d96',
    borderRadius: '30px',
    opacity: '0.5',
    top: '125px',
    left: '437px',
    height: '200px',
    width: '1000px',
  }
});

const TopPhoto = () => {
  const randomNum = Math.floor(Math.random() * 4) + 1;
  console.log(randomNum);
  const classes = useStyles();

  return (
        <div className={classes.divMargin}>
          <Grid item>
              {randomNum === 1 && 
                <div>
                  <img src='Restaurant1_scaled.jpg' alt='Restaurant1' className={classes.root}/>
                </div>
              }
              {randomNum === 2 && 
                <div>
                  <img src='Restaurant2_scaled.jpg' alt='Restaurant1' className={classes.root}/>
                </div>
              }
              {randomNum === 3 && 
                <div>
                  <img src='Restaurant3_scaled.jpg' alt='Restaurant1' className={classes.root}/>
                </div>
              }
              {randomNum === 4 && 
                <div>
                  <img src='Restaurant4_scaled.jpg' alt='Restaurant1' className={classes.root}/>
                </div>
              }
              {/* <Typography className={classes.text} variant='h1'>
                    {text}
                  </Typography>
                  <div className={classes.div} /> */}   
          </Grid>
        </div>
  );
}

export default TopPhoto;