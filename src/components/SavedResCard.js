import React, { useState } from 'react';
import { Typography, Card, CardActions, CardContent, CardMedia, Button, Grid, IconButton } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';

import { themeCards } from '../styles/theme';

const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(180deg, rgba(152,168,255,1) 0%, rgba(121,142,255,1) 56%, rgba(98,122,255,1) 100%)',
      display: 'flex',
      height: '100px',
      [theme.breakpoints.down('xs')]: {
        height: '180px',
      },  
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
      [theme.breakpoints.down('xs')]: {
        width: '200px',
      },  
    },
    text: {
      color: '#4B3F72'     
    },
    title: {
      fontSize: '1.5em',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.3em',
      }, 
    },
    subtext: {
      fontSize: '0.875em',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.75em',
      }, 
    } 
  }));

const SavedResCard = (props) => {
    const [selected, setSelected] = useState(false);
    const classes = useStyles();
    const { place, selectedRes } = props;


    const handleChange = () => {
        setSelected(!selected);
        selectedRes(place.place_id);
    }
    
    return(
        <ThemeProvider theme={themeCards}>
          <div>
          <Card className={classes.root} raised={true}>
              <CardMedia
                  className={classes.cover}
                  image={place.photo}
                  title="Restaurant_Photo"
              />
              <Grid container spacing={0} justify='space-between'>
              <Grid item>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                            <Typography className={classes.title} variant="h5" component="h2" align='left' gutterBottom>
                                {place.name.substring(0,20)}{place.name.length > 20 && '...'}
                            </Typography>
                            <Typography className={classes.subtext} variant="body2" component="p" align='left'>
                                {place.street}
                            </Typography>
                    </CardContent>
                </div>
              </Grid>
              <Grid item>
              <div> 
                  { selected ? 
                  <CardActions>
                      <IconButton size='small' onClick={handleChange}>
                          <CheckIcon />
                      </IconButton>        
                  </CardActions>
                  :
                  <CardActions>
                      <Button className={classes.text} size='small' onClick={handleChange}>
                          Select
                      </Button>        
                  </CardActions>
                  }
              </div>
              </Grid>
              </Grid>
          </Card>
          </div>
        </ThemeProvider>
    )
}

export default SavedResCard;