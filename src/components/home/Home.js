import React from 'react';

import NavBar from '../auth/NavBar';
import TopPhoto from './TopPhoto';
import HowItWorks from './HotItWorks';
import HomepageFooter from './HomepageFooter';

import { Grid } from '@material-ui/core';

const Home = () => {
  return (
    <div>
      <NavBar />
      <TopPhoto />
      <Grid container style={{justifyContent: 'center'}}>
        <HowItWorks />
      </Grid>
      <Grid container>
          <HomepageFooter height='80px'/>
      </Grid>
    </div>
  );
}

export default Home;