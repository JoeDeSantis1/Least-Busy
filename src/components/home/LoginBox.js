import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0px 20px 20px 20px',
        margin: '40px 0px 20px 0px',
        alignSelf: 'center',
        flexDirection: 'column',
        display: 'flex',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '5px',
        borderColor: '#0a438b',
        backgroundColor: '#0a438b',
        fontFamily: 'Roboto'
    },
    text: {
        color: 'white',
    },
    button: {
        alignSelf: 'center',
        padding: '10px',
        backgroundColor: 'white',
        color: '#0a438b',
        border: 'none',
        transition: 'all 0.5s',
        borderRadius: '5px',
        cursor: 'pointer',
        '&:after': {
            content: '>>',
            position: 'absolute',
            backgroundColor: 'grey',
            color: 'white',
            opacity: 0,
            top: 0,
            right: '-20px',
            transition: '0.5s',
        },
        '&:hover': {
            padding: '10px',
            backgroundColor: 'grey',
            color: 'white',
            opacity: 1,
            right: 0,
        },
    },
    span: {
        cursor: 'pointer',
        display: 'inline-block',
        position: 'relative',
        transition: '0.5s',
        '&:after': {
            content: '>>',
            position: 'absolute',
            opacity: 0,
            top: 0,
            right: '-20px',
            transition: '0.5s',
            opacity: 1,
            right: 0,
        },
    }
}));

const LoginBox = (props) => {
    const { handleAuthOpen } = props;
    const classes = useStyles(); 

    return(
        <div className={classes.root}>
            <h3 className={classes.text}>Sign up or Login to get started</h3>
            <button onClick={handleAuthOpen} className={classes.button}><span>Sign Up / Login</span></button>
        </div>
    );
}

export default LoginBox;