import React, { useState } from 'react';
import { Typography, Card, CardActions, CardContent, Button, Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
    card: {
        background: 'linear-gradient(180deg, rgba(152,168,255,1) 0%, rgba(121,142,255,1) 56%, rgba(98,122,255,1) 100%)',
        width: '350px',
    },
    text: {
      color: '#4B3F72'
    }
});

const SavedAddressCard = (props) => {
    const [selected, setSelected] = useState(false);
    const classes = useStyles();
    const { address, handleAddressSelectChange } = props;
    const { label, number, street, city, state, zip } = address;

    const handleChange = () => {
        setSelected(!selected);
        handleAddressSelectChange(address.label);
    }
    
    return(
        <Card className={classes.card} raised={true}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {label.substring(0,16)}{label.length > 16 && '...'} 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {`${number} ${street} ${city}, ${state} ${zip}`}
                </Typography>
            </CardContent>
            { selected ? 
            <CardActions>
                <Grid container justify="flex-end">
                    <IconButton size='small' onClick={handleChange}>
                        <CheckIcon />
                    </IconButton>
                </Grid>
            </CardActions>
            :
            <CardActions>
                <Grid container justify="flex-end">
                    <Button claseName={classes.text} size="small" onClick={handleChange}>
                        Select
                    </Button>
                </Grid>
            </CardActions>
            }
        </Card>
    )
}

export default SavedAddressCard;