import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Grid, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Input from '../dialogForms/Input';
import LoadingDialog from '../dialogForms/LoadingDialog';
import { themeAuth } from '../../styles/theme';

const useStyles = makeStyles(() => ({
    submit: {
        marginTop: '15px'
    }
}))

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const Auth = (props) => {
    const { open, onClose } = props;
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const history = useHistory();

    const handleSubmit = () => {
        setIsLoading(true);

        if(isSignup) {
            fetch('https://young-refuge-35360.herokuapp.com/user/signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
                })
            .then(res => res.json())
            .then(data => {
                if(data.message) {
                    alert(data.message);
                    data.message.startsWith('U') && setIsSignup(false);
                    setIsLoading(false);
                } else {
                    delete data.result.password;
                    localStorage.setItem('profile', JSON.stringify(data));
                    window.scrollTo(0, 0);
                    history.push('/profile');
                    setIsLoading(false);
                }
            })
        } else {
            fetch('https://young-refuge-35360.herokuapp.com/user/signIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => {
                if(data.message) {
                    alert(data.message);
                    data.message.startsWith('U') && setIsSignup(true);
                    setIsLoading(false);
                } else {
                    delete data.result.password;
                    localStorage.setItem('profile', JSON.stringify(data));
                    window.scrollTo(0, 0);
                    history.push('/dashboard');
                    setIsLoading(false);
                }
            })
        }

    };
    
    const handleChange = ({target}) => {
        setFormData({ ...formData, [target.name]: target.value})
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }

    return (
        <ThemeProvider theme={themeAuth}>
        { isLoading ?
        <div>
            <LoadingDialog open={true}/>
        </div>
        :
        <div>
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{isSignup ? 'Sign Up' : 'Sign In'}</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        { isSignup && (
                            <>
                                <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half/>
                                <Input name='lastName' label='Last Name' handleChange={handleChange} half />
                            </>
                        )}
                        <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password'/>}
                    </Grid>
                    <Button onClick={handleSubmit} fullWidth variant='contained' color='secondary' className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>
                    <Grid container justify='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have an account? Sign In!' : 'Don\'t have an account? Sign Up!'}
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
        }
        </ThemeProvider>
    )
}

export default Auth;