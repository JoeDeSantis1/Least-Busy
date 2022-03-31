import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '43%',
    height: '35%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    backgroundColor: 'white',
    opacity: '85%',
    zIndex: 100, 
  },
  overlayText: {
    textAlign: 'center',
  },
  centerText: {
    position: 'absolute',
    fontFamily: 'Proza Libre',
    fontSize: '4vw',
    fontWeight: '600',
    fontStyle: 'italic',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
});

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