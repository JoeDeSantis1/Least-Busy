import React, { useState } from 'react';

import { DialogActions, DialogContent, DialogContentText, DialogTitle, Dialog, TextField, Input, Button } from '@material-ui/core';

import AutoComplete from 'react-google-autocomplete';

import { makeStyles } from '@material-ui/core/styles';

import '../styles.css';


const useStyles = makeStyles((theme) => ({
    textField: {
        marginRight: 8,
        width: 176
    },
    button: {
        justifyContent: 'center'
    }, 
    input: {
        paddingTop: 10,
    }
}))


const AddAddressDialogForm = (props) => {
    let addressObj = {};
    const { onClose, open, addAddress } = props;
    const [label, setLabel] = useState('');
    const classes = useStyles();

    const handleAddAddress = () => {
        addAddress({label: label, address_components: addressObj.address_components});
        onClose();
    }

    const handleCancel = () => {
        onClose();
    }

    const handleChange = ({ target }) => {
        setLabel(target.value);
    }

    return (
        <div>
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            <div>
                <DialogTitle id="form-dialog-title">New Address</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Save an address to easily select an origin address when using the 
                    'When I Get There' feature 
                </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="label"
                        label="Address Label (i.e. Work, Home)"
                        type="text"
                        fullWidth
                        onChange={handleChange}
                    />
                    <div>
                        <Input
                            className={classes.input}
                            fullWidth
                            color="secondary"
                            inputComponent={({ inputRef, onFocus, onBlur, ...props }) => (
                                <AutoComplete
                                    apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                                    {...props}
                                    onPlaceSelected={(selected) => {
                                        addressObj = selected;
                                    }}
                                    options={{
                                        types: ['address'],
                                        componentRestrictions: { country: 'us' },
                                        fields: [
                                            'address_components'
                                        ]
                                    }}
                                />  
                            )}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddAddress} color="primary">
                        Add Address
                    </Button>
                </DialogActions>
            </div>
        </Dialog>
        </div>
    );
}

export default AddAddressDialogForm;