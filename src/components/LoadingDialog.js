import React from 'react';

import { DialogContent, DialogTitle, Dialog, CircularProgress } from '@material-ui/core';


const LoadingDialog = (props) => {
    const { onClose, open } = props;

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

export default LoadingDialog;