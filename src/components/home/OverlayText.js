import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: '43%',
    height: '40%',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    backgroundColor: 'white',
    opacity: '85%',
    zIndex: 100, 
    [theme.breakpoints.down('xs')]: {
      width: '55%',
    },
  },
  overlayText: {
    textAlign: 'center',
  },
  centerText: {
    position: 'absolute',
    fontFamily: 'Roboto',
    fontSize: '4vw',
    fontWeight: '600',
    fontStyle: 'italic',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('xs')]: {
      fontSize: '5vw',
    },
  }
}));

const OverlayText = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.overlayText}>
            <span className={classes.centerText}>Least Busy</span>
        </div>
    </div>
  );
}

export default OverlayText;