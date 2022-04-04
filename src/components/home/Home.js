import React from 'react';

import NavBar from '../auth/NavBar';
import TopPhoto from './TopPhoto';
import HowItWorks from './HotItWorks';
import HomepageFooter from './HomepageFooter';

import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  howItWorks: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
  },
  footer: {
    position: 'fixed',
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <TopPhoto />
      <div className={classes.howItWorks}>
        <HowItWorks />
      </div>
      <div>
        <HomepageFooter height='50px'/>
      </div>
    </>
  );
}

export default Home;