import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OverlayText from './OverlayText';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    textAlign: 'center',
  },
  overlayText: {
    position: 'absolute',
  },
  divMargin: {
    marginTop: '64px',
    width: '2000px',
    minWidth: '200px',
    maxWidth: '100%',
    maxHeight: '250px',
    objectFit: 'cover',
    padding: '0px',
    margin: '0px',
    paddingBottom: 0
  },
});

const TopPhoto = () => {
  const randomNum = Math.floor(Math.random() * 4);
  const classes = useStyles();

  return (
        <div className={classes.root}>
          <OverlayText />
          <div>
            {randomNum === 0 && 
                <img src='Restaurant1_scaled.png' alt='Restaurant1' className={classes.divMargin}/>
            }
            {randomNum === 1 && 
                <img src='Restaurant2_scaled.png' alt='Restaurant1' className={classes.divMargin}/>
            }
            {randomNum === 2 && 
                <img src='Restaurant3_scaled.png' alt='Restaurant1' className={classes.divMargin}/>
            }
            {randomNum === 3 && 
                <img src='Restaurant4_scaled.png' alt='Restaurant1' className={classes.divMargin}/>
            }
          </div>  
        </div>
  );
}

export default TopPhoto;