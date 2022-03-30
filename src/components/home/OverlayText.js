import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '25%',
    height: '25%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
  },
  overlayText: {
    textAlign: 'center',
  },
  textBgColor: {
    position: 'absolute',
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
            <span className={classes.textBgColor}>Least Busy</span>
        </div>
    </div>
  );
}

export default OverlayText;