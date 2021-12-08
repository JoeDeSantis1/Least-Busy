import React from 'react';

import { DialogActions, DialogContent, DialogContentText, DialogTitle, Dialog, Input, Button } from '@material-ui/core';

import AutoComplete from 'react-google-autocomplete';

import '../../styles/styles.css';


const AddAddressDialogForm = (props) => {
    let addressObj = {};
    const { onClose, open } = props;

    const findAddressComponent = (componentType) => {
        const componentIndex = addressObj.address_components.findIndex(el => el.types[0] === componentType);

        const type = addressObj.address_components[componentIndex];

        if(type.types[0] === 'administrative_area_level_1' || type.types[0] === 'country') {
            return type.short_name;
        } else {
            return type.long_name;
        }
    }

    const showMe = () => {
        const address = `${findAddressComponent('street_number')} ${findAddressComponent('route')} ${findAddressComponent('locality')}, ${findAddressComponent('administrative_area_level_1')} ${findAddressComponent('postal_code')}`
        
        onClose(address);
    }

    const handleCancel = () => {
        onClose();
    }

    return (
        <div>
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Temporary Address</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Enter an address to see how busy restaurants will be when 
                you get there 
            </DialogContentText>
                <div>
                    <Input
                        fullWidth
                        color="secondary"
                        inputComponent={({ inputRef, onFocus, onBlur, ...props }) => (
                            <AutoComplete
                                apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                                {...props}
                                onPlaceSelected={(selected) => {
                                    addressObj = selected;;
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
                <Button onClick={showMe} color="primary">
                    Show Me
                </Button>
            </DialogActions>  
        </Dialog>
        </div>
    );
}

export default AddAddressDialogForm;