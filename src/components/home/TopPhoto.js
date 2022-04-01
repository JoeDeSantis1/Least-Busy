import React from 'react';

import { Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import OverlayText from './OverlayText';
import Slider from 'react-slick';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    textAlign: 'center',
  },
  overlayText: {
    position: 'absolute',
  },
  divMargin: {
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

  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <Fade 
            in

            {...(true ? { timeout: 5000 } : {})}
    >
    <div className={classes.root}>
      <OverlayText />
      <div>
      <Slider {...settings}>
        <div>
          <img src='Restaurant1_scaled.png' alt='Restaurant1' className={classes.divMargin}/>
        </div>
        <div>
          <img src='Restaurant2_scaled.png' alt='Restaurant1' className={classes.divMargin}/>
        </div>
        <div>
          <img src='Restaurant3_scaled.png' alt='Restaurant1' className={classes.divMargin}/>
        </div>
        <div>
          <img src='Restaurant4_scaled.png' alt='Restaurant1' className={classes.divMargin}/>
        </div>
      </Slider>
      </div>
    </div>
    </Fade>
        // <div className={classes.root}>
        //   <OverlayText />
        //   <div>
        //     {randomNum === 0 && 
        //         <img src='Restaurant1_scaled.png' alt='Restaurant1' className={classes.divMargin}/>
        //     }
        //     {randomNum === 1 && 
        //         <img src='Restaurant2_scaled.png' alt='Restaurant1' className={classes.divMargin}/>
        //     }
        //     {randomNum === 2 && 
        //         <img src='Restaurant3_scaled.png' alt='Restaurant1' className={classes.divMargin}/>
        //     }
        //     {randomNum === 3 && 
        //         <img src='Restaurant4_scaled.png' alt='Restaurant1' className={classes.divMargin}/>
        //     }
        //   </div>  
        // </div>
  );
}

export default TopPhoto;