import React from 'react';

import { DialogActions, DialogContent, DialogContentText, Dialog, Button } from '@material-ui/core';

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


const WarningDialogPopover = (props) => {
    const { onClose, open, warning } = props;
    const classes = useStyles();

    const handleOk = () => {
        onClose();
    }


    return (
        <div>
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            <div>
                <DialogContent>
                    <DialogContentText align='center'>
                        {warning}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOk} color="primary">
                        Okay
                    </Button>
                </DialogActions>
            </div>
        </Dialog>
        </div>
    );
}

export default WarningDialogPopover;