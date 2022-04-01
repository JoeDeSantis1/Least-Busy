import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode'; 

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, IconButton, Menu, MenuItem } from '@material-ui/core';

import Auth from './Auth';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignContent: 'space-between',
      width: '100%',
      backgroundColor: '#0a438b',
      fontFamily: 'Roboto'
    },
    title: {
      flexGrow: 1,
    },
    text: {
      color: 'white',
      marginLeft: '20px',
    },
    textLink: {
      color: 'white',
      marginRight: '20px',
      cursor: 'pointer'
    },
    rightIcons: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
    }
    }
}));

  
const NavBar = (props) => {
    const classes = useStyles();
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [anchorEl, setAnchorEl] = useState(null);
    const [openAuth, setOpenAuth] = useState(false);
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
      const token = user?.token;

      if(token) {
        const decodedToken = decode(token);

        console.log(decodedToken);

        setIsSignedIn(true);

        if(decodedToken.exp * 1000 < new Date().getTime()) {
            logout();
        }
      }

      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const logout = () => {
      localStorage.clear();

      history.push('/');

      setIsSignedIn(false);

      setUser(null);
    };

    const handlePopoverClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };

    const handleAuthOpen = () => {
      setOpenAuth(true);
    };

    const handleAuthClose = () => {
      setOpenAuth(false);
    };

    return (
      <div className={classes.root}>
          <div className={classes.title}>
              <h4 className={classes.text}>Least Busy</h4>
          </div>
          {isSignedIn ?
            <div className={classes.rightIcons}> 
              <IconButton aria-controls='avatar-button' aria-haspopup={true} onClick={handlePopoverClick} size='small'>
                <Avatar alt={user.result.name} src='/millie.jpg'></Avatar>
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handlePopoverClose}
              >
                <MenuItem component={Link} to={'/dashboard'}>Dashboard</MenuItem>
                <MenuItem component={Link} to={'/profile'}>My Profile</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div> :
            <div>
              <h4 onClick={handleAuthOpen} className={classes.textLink}>Login/Sign Up</h4>
            </div>
          }
                  <Auth open={openAuth} onClose={handleAuthClose}/>
      </div>
    )
}

export default NavBar;