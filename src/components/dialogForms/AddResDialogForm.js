import React from 'react';

import { DialogActions, DialogContent, DialogContentText, DialogTitle, Dialog, Input, Button } from '@material-ui/core';

import AutoComplete from 'react-google-autocomplete';

import { makeStyles } from '@material-ui/core/styles';

import '../../styles/styles.css';

const useStyles = makeStyles((theme) => ({
    input: {
        width: 400
    }
}))


const AddResDialogForm = (props) => {
    let placeObj = {};
    const { onClose, open, addRes } = props;
    const classes = useStyles();

    const handleAddRes = () => {
        addRes(placeObj);
        onClose();
    }

    const handleCancel = () => {
        onClose();
    }


    return (
        <div>
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
                <div>
                    <DialogTitle id="form-dialog-title">Add A New Restaurant</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Search for a Restaurant Below!
                    </DialogContentText>
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
                                            placeObj = selected;
                                        }}
                                        options={{
                                            types: ['establishment'],
                                            componentRestrictions: { country: 'us' },
                                            fields: [
                                                'name',
                                                'icon',
                                                'address_components',
                                                'business_status',
                                                'international_phone_number',
                                                'geometry',
                                                'place_id',
                                                'price_level',
                                                'rating',
                                                'website',
                                                'opening_hours',
                                                'photos',
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
                        <Button onClick={handleAddRes} color="primary">
                            Add Place
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
}

export default AddResDialogForm;