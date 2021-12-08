import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid} from '@material-ui/core';

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
});

const TopPhoto = () => {
  const randomNum = Math.floor(Math.random() * 4) + 1;
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
          </Grid>
        </div>
  );
}

export default TopPhoto;