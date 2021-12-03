import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

import SavedResCard from './SavedResCard';

const useStyles = makeStyles({
  root: {
    width: '300px',
    padding: '0px',
    margin: '0px',
  },
  media: {
    height: 500,
    paddingBottom: 0,
    position: 'relative'
  },
  text: {
    color: red[50],
    paddingTop: '250px'
  },
  card: {
    paddingBottom: '15px'
  }
});

const SavedResCardCarousel = (props) => {
  const { places, handleResSelectChange } = props;
  const classes = useStyles();

  const selectedRes = (selected) => {
    console.log(selected);
    handleResSelectChange(selected);
  }

  return (
      <div>    
        {places.map(el => {
            return <div className={classes.card}>
              <SavedResCard place={el} selectedRes={selectedRes}/>
            </div>
            })
        }
      </div>
  );
}

export default SavedResCardCarousel;