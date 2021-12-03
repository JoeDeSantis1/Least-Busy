import React, { useState } from 'react';

import { DialogContent, DialogTitle, Dialog, CircularProgress } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginRight: 8,
        width: 176
    },
    button: {
        justifyContent: 'center'
    },
    input: {
        width: 400
    }
}))


const AddResDialogForm = (props) => {
    let placeObj = {};
    const { onClose, open, addRes } = props;

    const classes = useStyles();

    const acknowledgeComplete = () => {
        onClose();
    }

    const handleAddRes = () => {
        addRes(placeObj);
    }

    const handleCancel = () => {
        onClose();
    }


    return (
        <div>
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            <div>
                <DialogTitle id="form-dialog-title">Loading...</DialogTitle>
                <DialogContent>
                    <CircularProgress color='inherit' style={{marginLeft: '25px', marginBottom: '20px'}}/>
                </DialogContent>
            </div>
        </Dialog>
        </div>
    );
}

export default AddResDialogForm;