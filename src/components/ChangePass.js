import React, { useState } from 'react';

import { DialogActions, DialogContent, DialogTitle, Dialog, Button, Grid } from '@material-ui/core';

import Input from './Input';

const initialState = {
    currentPass: '',
    newPass: ''
}

const ChangePass = (props) => {
    const { onClose, open, changePassword } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const handleChangePass = () => {
        changePassword(formData);
        onClose();
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    const handleCancel = () => {
        setFormData(initialState);
        onClose();
    }

    const handleChange = ({ target }) => {
        setFormData({...formData, [target.id]: target.value});
    }

    return (
        <div>
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
                <div>
                    <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2}>
                            <Input id='currentPass' name='currentPass' label='Current Password' handleChange={handleChange} autoFocus type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                            <Input id='newPass' name='firstName' label='New Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                            <Input id='repeatNewPass' name='firstName' label='Repeat New Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCancel} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleChangePass} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </div> 
            </Dialog>
        </div>
    );
}

export default ChangePass;