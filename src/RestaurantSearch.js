import React, { useState } from 'react';

import { Typography, Button, TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import NavBar from './NavBar';

const useStyles = makeStyles(() => ({
    nav: {
        paddingBottom: '70px'
    },
    background: {
        backgroundImage: 'url(https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg)', 
        backgroundRepeat: 'no-repeat',
    },
    textfield: {
    },
    input: {
        backgroundColor: 'white'
    }
}));

const initialState = {
    query: ' '
}

const Profile = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState);
    const [placeNames, setplaceNames] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:4000/places/viewPlace', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
            })
        .then(res => res.json())
        .then(data => data ? setplaceNames(data) : console.log('There is no data'))
        .catch(error => console.log(error))
    }
    
    const handleChange = ({target}) => {
        setFormData({query: target.value});
        console.log(formData.query);
    }

    return(
        <div className={classes.background}>
            <div className={classes.nav}>
                <NavBar />
            </div>
            <div>
                <Typography align='center' variant='h1' color='white'>
                    Profile
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container justify='center'>
                        <Grid item>
                            <TextField
                                id="outlined-required"
                                label="Search for Restaurant"
                                variant='outlined'
                                onChange={handleChange}
                                InputProps={{
                                    className: classes.input
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justify='center'>
                        <Grid item>
                            <Button type='submit' variant='contained' color='secondary'>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
                {placeNames && 
                <Typography>
                    {placeNames.map((name, index) => {
                        return <div key={index}>
                            <ul style={{alignItems: 'center'}}> 
                                <li>{name}</li>
                            </ul>
                        </div>
                    })}
                </Typography>}
            </div>
        </div>
    )
}

export default Profile;