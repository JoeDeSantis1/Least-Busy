import React, { useState } from 'react';

import { DialogActions, DialogContent, DialogContentText, DialogTitle, Dialog, TextField, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginRight: 8,
        width: 176
    },
}))

const initialState = {
    label: '',
    street: '',
    city: '',
    state: '',
    zip: '',
}

const AddAddressDialogForm = (props) => {
    const { onClose, open, editAddress, allGood, selectedAddress } = props;
    const [acknowledge, setAcknowledge] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const classes = useStyles();

    const acknowledgeComplete = () => {
        onClose();
        setAcknowledge(false);
    }

    const handleEditAddress = () => {
        editAddress(formData);
        setAcknowledge(true);
    }

    const handleCancel = () => {
        console.log(selectedAddress[0].label);
    }

    const handleChange = ({ target }) => {
        setFormData({...formData, [target.id]: target.value});
    }

    return (
        <div>
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            {!acknowledge ? 
            <div>
                <DialogTitle id="form-dialog-title">Edit Address</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Edit your saved address
                </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="label"
                        label="Address Label (i.e. Work, Home)"
                        type="text"
                        value={selectedAddress[0].label}
                        fullWidth
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="street"
                        label="Street"
                        type="text"
                        defaultValue={''}
                        fullWidth
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.textField}
                        margin="dense"
                        id="city"
                        label="City"
                        type="text"
                        defaultValue={selectedAddress.city}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.textField}
                        margin="dense"
                        id="state"
                        label="State"
                        inputProps={{
                            maxlength: 2
                        }}
                        type="text"
                        defaultValue={''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="zip"
                        label="Zip Code"
                        type="number"
                        defaultValue={''}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleEditAddress} color="primary">
                        Submit Changes
                    </Button>
                </DialogActions>
            </div>
            :
            allGood ? 
            <div>
                <DialogContent>
                    <DialogContentText align='center'>
                        Your address has been updated!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={acknowledgeComplete} color="primary">
                        Okay
                    </Button>
                </DialogActions>
            </div>
            :
            <div>
                <DialogContent>
                    <DialogContentText align='center'>
                        Something went wrong while updating address. Please try again.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={acknowledgeComplete} color="primary">
                        Go Back
                    </Button>
                </DialogActions>
            </div>
            }   
        </Dialog>
        </div>
    );
}

export default AddAddressDialogForm;