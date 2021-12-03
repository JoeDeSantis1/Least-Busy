import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { List, ListItem, ListItemAvatar, ListItemText, DialogTitle, DialogContent, DialogContentText, Dialog, Avatar, Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';

import AddAddressDialogForm from './AddAddressDialogForm';
import TempAddressDialogForm from './TempAddressDialogForm';
import WarningDialogPopover from './WarningDialogPopover';


const useStyles = makeStyles({
    avatar: {
      backgroundColor: blue[100],
      color: blue[600],
    },
    dialog: {
        backgroundColor: grey[800],
    }
});

const initialState = {
  label: '',
  street: '',
  city: '',
  state: '',
  zip: '',
}

const AddressDialogPopover = (props) => {
    const classes = useStyles();
    const [addresses, setAddresses] = useState([]);
    const [openNewDialog, setOpenNewDialog] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [openTemp, setOpenTemp] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);
    const [warning, setWarning] = useState('');
    const [currentSelectedAddress, setCurrentSelectedAddress] = useState();
    const [noAddresses, setNoAddresses] = useState(false);
    const [addAllGood, setAddAllGood] = useState(false);
    const user = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();
    const { onClose, open, noPlaces, resetCurrentAddressValue, handleResetCurrentAddress } = props;
  
    useEffect(() => {
        const email = user.result.email;
        const bodyObject = {email: email};

        fetch('https://young-refuge-35360.herokuapp.com/user/userProfileInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyObject)
            })
        .then(res => res.json())
        .then(data => {
            if(data.addresses.length !== 0) {
              for(let i=0; i<data.addresses.length; i++) {
                  const { label, number, street, city, state, zip } = data.addresses[i];
                  const topAddress = `${number} ${street}`;
                  const bottomAddress = `${city}, ${state} ${zip}`;

                  const newAddressObject = {
                      label: label,
                      topAddress: topAddress,
                      bottomAddress: bottomAddress,
                  } 
                  
                  if(i===0) {
                      setAddresses([newAddressObject]);
                  } else {
                      setAddresses(prevAddresses => {
                          return [...prevAddresses, newAddressObject];
                      })
                  }
              }
            } else {
              setNoAddresses(true);
            }
        })
    }, [addAllGood])
    
    const handleClose = () => {
      onClose();
    };

    const whichMessage = () => {
      if(noAddresses && !noPlaces) {
        return <div> 
          <DialogContent>
                <DialogContentText>
                    You don't have any saved addresses.
                </DialogContentText>
                <DialogContentText>
                    You can use a temporary address or
                </DialogContentText>
                <DialogContentText>
                    add an address to you Profile
                </DialogContentText>
                <DialogContentText>
                    below or from you Profile page.
                </DialogContentText>
              </DialogContent>
        </div>
      } else if (noAddresses && noPlaces) {
        return <div> 
          <DialogContent>
                <DialogContentText>
                    You don't have any saved addresses
                </DialogContentText>
                <DialogContentText>
                    or any saved restaurants. Head to
                </DialogContentText>
                <DialogContentText>
                    your Profile to add some.
                </DialogContentText>    
          </DialogContent>
        </div>
      } else if (noPlaces) {
        return <div> 
          <DialogContent>
                <DialogContentText>
                    You need to add some restaurants
                </DialogContentText>
                <DialogContentText>
                    to see how busy they will be when
                </DialogContentText>
                <DialogContentText>
                    you get there.
                </DialogContentText>
              </DialogContent>
        </div>
      } else {
        return <DialogTitle id="address-dialog">Select Address</DialogTitle>
      }
    }
  
    const handleListItemClick = (value) => {
      if(value === currentSelectedAddress && resetCurrentAddressValue === false) {
        setWarning('You are already seeing the busyness info from that address. Please select another address');
        setOpenWarning(true);
        setOpenNewDialog(true);
      } else {
        setCurrentSelectedAddress(value);
        onClose(value);
        setOpenTemp(false);
        handleResetCurrentAddress();
      }
    };

    const handleNewAddClose = () => {
      setOpenNewDialog(false);
      setOpenAdd(false);
    }

    const handleNewAddOpen = () => {
      setOpenAdd(true);
      setOpenNewDialog(true);
    } 

    const handleNewTempClose = (value) => {
      if(value === undefined) {
        setOpenNewDialog(false);
        setOpenTemp(false);
      } else {
        onClose(value);
        setOpenNewDialog(false);
        setOpenTemp(false);
      }
    }

    const handleWarningClose = () => {
      setOpenNewDialog(false);
      setOpenWarning(false);
    }

    const handleNewTempOpen = () => {
      setOpenTemp(true);
      setOpenNewDialog(true);
    }
    
    const handleProfileClick = () => {
      history.push('/profile');
    }

    const addAddress = (formData) => {
      formData.email = user.result.email;
      fetch('https://young-refuge-35360.herokuapp.com/user/addAddress', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(data => {
          data.message === 'success' ? setAddAllGood(true) : setAddAllGood(false);          
      })
  }
  
    return (
      <div>
        {!openNewDialog ?
        <div>
          <Dialog paperProps={{style: {backgroundColor: grey[800]}}} onClose={handleClose} aria-labelledby="address-dialog" open={open}>
            <div>
            { whichMessage() }
            </div>
            <List>  
              { noPlaces ?
              <ListItem autoFocus button onClick={handleProfileClick}>
                <ListItemAvatar>
                  <Avatar>
                    <AddIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Head to Profile" />
              </ListItem>
              :
              <div>
                {addresses.map((address) => (
                    <ListItem button onClick={() => handleListItemClick(`${address.topAddress} ${address.bottomAddress}`)} key={address.label}>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                        primary={address.label} 
                        secondary={
                            <>
                                <Typography component="span" variant="body2" > {address.topAddress} </Typography>
                                <Typography component="span" variant="body2" > {address.bottomAddress} </Typography>
                            </>
                        }/>
                    </ListItem>
                ))}
                <ListItem autoFocus button onClick={handleNewTempOpen}>
                  <ListItemAvatar>
                    <Avatar>
                      <AddIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Temporary Address" />
                </ListItem>

                <ListItem autoFocus button onClick={handleNewAddOpen}>
                  <ListItemAvatar>
                    <Avatar>
                      <AddIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Add Address" />
                </ListItem>
              </div>
            }
            </List>
          </Dialog>
        </div>
        :
        <div>
        { openAdd ? 
          <AddAddressDialogForm open={openAdd} onClose={handleNewAddClose} addAddress={addAddress} user={user} initialState={initialState} allGood={addAllGood} />
        : openTemp &&
          <TempAddressDialogForm open={openTemp} onClose={handleNewTempClose} />
        }
        :
        { openWarning &&
          <WarningDialogPopover open={openWarning} onClose={handleWarningClose} warning={warning}/>
        }
        </div>

        }
      </div>
    );
  }
  
  export default AddressDialogPopover;