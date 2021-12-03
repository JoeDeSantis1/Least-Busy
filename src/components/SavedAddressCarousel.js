import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Slider from 'react-slick';

import SavedAddressCard from './SavedAddressCard';

import '../styles.css';

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
  arrowColor: {
    color: 'black'
  }
});

const SavedAddressCarousel = (props) => {
  const { addresses, handleAddressSelectChange } = props;
  const classes = useStyles();

  const selectedAddress = (selected, index) => {
    handleAddressSelectChange(selected, index);
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "90px",
    slidesToShow: 3,
    speed: 500
  };

  return (
      <div> 
        {addresses.map(el => {
              return <Grid item style={{justifyContent: 'center'}}>
                <div>
                  <SavedAddressCard address={el} selectedAddress={selectedAddress}/>
                </div>
              </Grid>
        })
        }
        {/* {addresses.length < 4 ?
          <Grid container justify='center'>
            {addresses.map(el => {
              return <Grid item>
                <div>
                  <SavedAddressCard address={el} selectedAddress={selectedAddress}/>
                </div>
              </Grid>
            })
            }
          </Grid>
        :
        <Slider {...settings} className={classes.arrowColor}>
            {addresses.map(el => {
              return <div>
                <SavedAddressCard address={el} selectedAddress={selectedAddress}/>
              </div>
            })
            }
        </Slider>
        } */}
      </div>
  );
}

export default SavedAddressCarousel;