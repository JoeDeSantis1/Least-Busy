import React, { useState, useEffect } from 'react';

import { Typography, Button, ButtonBase, Divider } from '@material-ui/core'; 
import { Grid, Card, CardContent, Avatar, CircularProgress } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import NavBar from './NavBar';
import AddAddressDialogForm from './AddAddressDialogForm';
import AddResDialogForm from './AddResDialogForm';
import WarningDialogPopover from './WarningDialogPopover';
import SavedResCardCarousel from './SavedResCardCarousel';
import SavedAddressCarousel from './SavedAddressCarousel';
import SavedAddressCard from './SavedAddressCard';
import SearchBar from './SearchBar';
import ChangePass from './ChangePass';
import ProfileBackground from './ProfileBackground';
import HomepageFooter from './HomepageFooter';
import { themeProfile }  from '../styles/theme';

const useStyles = makeStyles((theme) => ({
    nav: {
        paddingBottom: '60px'
    },
    background: { 
        background: 'linear-gradient(180deg, rgba(244,244,244,0) 0%, rgba(241,241,241,0.5914740896358543) 56%, rgba(245,245,245,0.5830707282913166) 100%)',
        backgroundRepeat: 'repeat',
    },
    text: {
        textAlign: 'center',
        backgroundColor: 'lightblue',
        marginBottom: theme.spacing(1),
        width: '100%',
        overflowX: 'auto'
    },
    input: {
        backgroundColor: 'white'
    },
    paper1: {
        background: 'rgba(208,234,240,0)',
        padding: theme.spacing(1),
        textAlign: 'center',
        whiteSpace: 'nowrap',
        margin: theme.spacing(1),
        width: 1100,
        zIndex: '10'
    },
    paper2: {
        background: 'rgba(208,234,240,0)',
        padding: theme.spacing(1),
        marginTop: '25px',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        margin: theme.spacing(1),
        width: 1200,
        zIndex: '10'
    },
    allPaper: {
        paddingTop: '18px',
    },
    searchPadding: {
        paddingTop: '5px',
    },
    leftButton: {
        width: '160px',
        marginRight: '10px',
        [theme.breakpoints.down('xs')]: {
            width: '120px',
        }, 
    },
    rightButton: {
        width: '180px',
        marginLeft: '10px',
        [theme.breakpoints.down('xs')]: {
            width: '120px',
        },
    },
    savedAddressesTitle: {
        paddingLeft: '3%',
    },
    forYourInformation: {
        width: '90%', 
        paddingTop: '30px', 
        maxWidth: '1024px',
    },
    userInfo: {
        paddingTop: '80px',
    },
    sectionTitle: {
        textDecoration: 'underline'
    },
    textButton: {
        textAlign: 'center',
        paddingTop: '2px'
    },
    avatar: {
        width: '180px',
        height: '180px',
        marginLeft: '0%',
        [theme.breakpoints.down('xs')]: {
            width: '150px',
            height: '150px',
            marginLeft: '0%',
        },
    },
    carousel: {
        paddingLeft: '10px',
        margin: '15px'
        
    },
}));


const Profile = () => {
    const classes = useStyles();
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [addressLabels, setAddressLabels] = useState([]);
    const [openAddAddressDialog, setOpenAddAddressDialog] = useState(false);
    // const [openEditAddressDialog, setOpenEditAddressDialog] = useState(false);
    const [openChangePassword, setOpenChangePassword] = useState(false);
    const [openAddResDialog, setOpenAddResDialog] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);
    const [warning, setWarning] = useState('');
    const [addAllGood, setAddAllGood] = useState(false);
    // const [editAllGood, setEditAllGood] = useState(false);
    const [changeAllGood, setChangeAllGood] = useState(false);
    const [resAllGood, setResAllGood] = useState(false);
    const [selectedPlaces, setSelectedPlaces] = useState([]);
    const [refreshToggle, setRefreshToggle] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [edit, setEdit] = useState(false);
    const user = JSON.parse(localStorage.getItem('profile'));
    const fullName = user.result.name;
   // let selectedAddress = [initialState];

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
            if(data.userPlaces) {
                const placeNames = data.userPlaces.map(el => {
                    return {
                        name: el.name, 
                        place_id: el.place_id, 
                        street: `${el.address_components.street}, ${el.address_components.city}`,
                        photo: `${el.photo}`
                    }
                });
                
                setPlaces(placeNames);
                setFilteredPlaces(placeNames);
                console.log(places);
            }
            if(data.addresses) {
                setAddresses(data.addresses);
                console.log(data.addresses);
            }

            setIsLoading(false);
        })
    }, [refreshToggle])

    const handleResSelectChange = (resName) => {
        if(selectedPlaces.includes(resName)) {
            const index = selectedPlaces.indexOf(resName);

            selectedPlaces.splice(index, 1);
        } else {
            setSelectedPlaces(prevSelected => {
                return [...prevSelected, resName]
            })
        }
    }

    const handleAddressSelectChange = (addressLabel) => {
        if(addressLabels.includes(addressLabel)) {
            const index = addressLabels.findIndex(el => el === addressLabel);

            addressLabels.splice(index, 1);
        } else {
            setAddressLabels(prevLabel => {
                return [...prevLabel, addressLabel]
            })
        }
    }

    const deletePlaces = () => {
        if(selectedPlaces.length > 0) {
            fetch('https://young-refuge-35360.herokuapp.com/places/deletePlaces', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({placesToDelete: selectedPlaces, email: user.result.email})
                })
            .then(res => res.json())
            .then(data => {
                if (data.message === 'success') {
                    setWarning('Restaurant has been deleted');
                    setSelectedPlaces([]);
                    setEdit(!edit);
                    setOpenWarning(true);
                    setRefreshToggle(!refreshToggle);
                }
            })
        } else {
            setWarning('Please select at least one restaurant to delete');
            setOpenWarning(true);
        }
    }

    const deleteAddress = () => {
        const email = user.result.email;

        if(addressLabels.length === 0) {
            setWarning('Please select an address to delete');
            setOpenWarning(true);
        } else {
            fetch('https://young-refuge-35360.herokuapp.com/user/deleteAddress', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: email, addressesToDelete: addressLabels})
            })
            .then(res => res.json())
            .then(data => {
                if(data.message === 'success'){
                    setWarning('Address Deleted');
                    setOpenWarning(true);
                }       
                setRefreshToggle(!refreshToggle);
            })
            }
    }

    // const editAddress = (formData) => {
    //     const email = user.result.email;
    //     const addressIdentifier = selectedAddress.label;


    //     for (const [key, value] of Object.entries(formData)) {
    //         if (value === "") {
    //             formData[key] = selectedAddress[key];
    //         }
    //     }

    //     fetch('http://localhost:4000/user/editAddress', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({email: email, editedAddress: formData, addressIdentifier: addressIdentifier})
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         data.message === 'success' ? setEditAllGood(true) : setEditAllGood(false);
    //         setRefreshToggle(!refreshToggle);            
    //     })
    // }

    const addAddress = (addressObj) => {
        addressObj.email = user.result.email;

        fetch('https://young-refuge-35360.herokuapp.com/user/addAddress', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addressObj)
        })
        .then(res => res.json())
        .then(data => {
            if(data.message === 'success') {
                setWarning('Address added successfully!');
                setOpenWarning(true);
                setRefreshToggle(!refreshToggle);
            } else if (data.message === 'exists') {
                setWarning("This address already exists");
                setOpenWarning(true);
            } else {
                setWarning("The address you are trying to add is either not specific enough or is missing required information. Please try again.");
                setOpenWarning(true);
            };      
        })
    }

    const addRes = (placeObj) => {
        fetch('https://young-refuge-35360.herokuapp.com/places/addRes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({place: placeObj, email: user.result.email})
        })
        .then(res => res.json())
        .then(data => {
            if(data.message === 'success') {
                setWarning('Restaurant added successfully!');
                setOpenWarning(true);
            } else if (data.message === 'exists') {
                setWarning("This restaurant already exists");
                setOpenWarning(true);
            } else {
                setWarning("The chosen establishment is either not a restaurant or is missing required information. Please try again.");
                setOpenWarning(true);
            };
            
            setRefreshToggle(!refreshToggle);
        })
    }

    const handleAddAddressDialogOpen = () => {
        setOpenAddAddressDialog(true);
    };
    
    const handleAddAddressDialogClose = () => {
        setOpenAddAddressDialog(false);
    };

    // const handleEditAddressDialogOpen = () => {
    //     if(addressLabels.length > 1) {
    //         setWarning('You can only edit one address at a time');
    //         setOpenDelete(true);
    //     } else if (addressLabels.length === 0) {
    //         setWarning('Please select an address to edit'); 
    //         setOpenDelete(true);
    //     } else {
    //         selectedAddress = addresses.filter(el => el.label === addressLabels[0]);
    //         setOpenEditAddressDialog(true);
    //     }
    // };
    
    // const handleEditAddressDialogClose = () => {
    //     setOpenEditAddressDialog(false);
    // };

    const handleAddResDialogOpen= () => {
        setOpenAddResDialog(true);
    };

    const handleAddResDialogClose = () => {
        setOpenAddResDialog(false);
    };

    const handleDeleteClose = () => {
        setOpenWarning(false);
        setRefreshToggle(!refreshToggle);
    }

    const handleChangePasswordOpen = () => {
        setOpenChangePassword(true);
    }

    const handleChangePasswordClose = () => {
        setOpenChangePassword(false);
    }

    const handleSearch = (value) => {
        setFilteredPlaces(places.filter(el => el.name.includes(value)));
    }

    const changePassword = (formData) => {
        const { currentPass, newPass, repeatNewPass } = formData;
        
        fetch('https://young-refuge-35360.herokuapp.com/user/changePassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
            body: JSON.stringify({currentPass: currentPass, newPass: newPass, repeatNewPass: repeatNewPass, email: user.result.email})
        })
        .then(res => res.json())
        .then(data => {
                setWarning(data.message);
                setOpenWarning(true);
                setRefreshToggle(!refreshToggle);
        })
    }

    return(
        <ThemeProvider theme={themeProfile}>
            <div className={classes.background}>
                <div className={classes.nav}>
                    <NavBar />
                </div>
                <div>
                    <ProfileBackground />
                </div>
                <div className={classes.allPaper}>
                    <Grid container justify='center' style={{marginBottom: '10px'}}> 
                        <Grid item>   
                            <Avatar alt={fullName} src='/millie.jpg' className={classes.avatar} />
                        </Grid> 
                    </Grid>
                    <Grid container spacing={1} direction='column' alignContent='center'> 
                        <Grid item>
                            <Typography align='center' variant='body1'>
                                {fullName}
                            </Typography>
                            <Typography align='center' variant='body1'>
                                {user.result.email}
                            </Typography>
                            <div className={classes.textButton}>
                                <ButtonBase onClick={handleChangePasswordOpen}>
                                    <Typography align='center' variant='body2'>
                                        Change Password...
                                    </Typography>
                                </ButtonBase>
                            </div>
                        </Grid>
                    </Grid>
                    <ChangePass open={openChangePassword} onClose={handleChangePasswordClose} changePassword={changePassword} /> 
                    { places.length > 0 &&              
                    <div className={classes.searchPadding}>
                        <Grid container justify='center'>
                            <Grid item>
                                <SearchBar handleSearch={handleSearch} /> 
                            </Grid>
                        </Grid>
                    </div>
                    }
                    <div>
                        <Grid container justify='center'>
                            <Grid item style={{width: '90%', paddingTop: '30px', maxWidth: '1020px'}}>
                                <Grid container justify='center' style={{paddingBottom: '15px'}}>
                                    <Grid item>
                                        <Button className={classes.leftButton} onClick={handleAddResDialogOpen} variant='contained' color='primary'>Add Restaurant</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button className={classes.rightButton} onClick={deletePlaces} variant='contained' color='primary'>Delete Restaurant</Button>
                                    </Grid>
                                </Grid>
                                <Typography align='left' variant='h5' style={{paddingLeft: '26px'}}>
                                    Saved Restaurants ({places.length})
                                </Typography>
                                { isLoading ?
                                <div style={{marginLeft: '13%', marginTop: '20px', marginBottom: '20px'}}>
                                <Grid item sm={6} style={{maxWidth: '85%', flexBasis: '85%'}}>
                                    <Card className={classes.text} raised>
                                        <CardContent>
                                            <Typography style={{marginBottom: '20px'}}>Loading Restaurants...</Typography>
                                            <CircularProgress color='inherit'/>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                </div>
                                :
                                places.length > 0 ?
                                <div className={classes.carousel}>
                                    <SavedResCardCarousel places={filteredPlaces} handleResSelectChange={handleResSelectChange}/>
                                </div>
                                :
                                <Grid item sm={6} style={{marginTop: '20px', marginBottom: '20px', maxWidth: '100%'}}>
                                    <Card className={classes.text} raised>
                                        <CardContent>
                                            <Typography>Add some restaurants to get started!</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                }
                                <AddResDialogForm open={openAddResDialog} onClose={handleAddResDialogClose} addRes={addRes} user={user} allGood={resAllGood} />
                                <WarningDialogPopover open={openWarning} onClose={handleDeleteClose} warning={warning} />
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container justify='center'>
                            <Grid item style={{width: '90%', paddingTop: '30px', maxWidth: '1020px'}}>
                                <Grid container justify='center' style={{paddingBottom: '20px'}}>
                                    <Grid item>   
                                        <Button className={classes.leftButton} onClick={handleAddAddressDialogOpen} variant='contained' color='primary'>Add Address</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button className={classes.rightButton} onClick={deleteAddress} variant='contained' color='primary'>Delete Address</Button>
                                    </Grid>
                                </Grid>
                                <Typography align='left' variant='h5' className={classes.savedAddressesTitle}>
                                    Saved Addresses ({addresses.length})
                                </Typography>
                                <Grid container justify='center' direction='row' spacing={2} style={{marginTop: '15px'}}>
                                    { isLoading ?
                                    <Grid item sm={6} style={{marginTop: '15px', marginBottom: '20px', maxWidth: '75%', flexBasis: '75%'}}>
                                        <Card className={classes.text} raised>
                                            <CardContent>
                                                <Typography style={{marginBottom: '20px'}}>Loading Addresses...</Typography>
                                                <CircularProgress color='inherit'/>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    :
                                    addresses.length !== 0 ? 
                                        addresses.map(el => {
                                            return <Grid item style={{justifyContent: 'center'}}>
                                                <SavedAddressCard address={el} handleAddressSelectChange={handleAddressSelectChange}/>
                                            </Grid>
                                        })
                                        :
                                        <Grid item sm={6} style={{marginTop: '10px', marginBottom: '20px', maxWidth: '90%', flexBasis: '90%'}}>
                                            <Card className={classes.text} raised>
                                                <CardContent>
                                                    <Typography>Add some addresses for the 'When I Get There' feature!</Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    }
                                    <AddAddressDialogForm open={openAddAddressDialog} onClose={handleAddAddressDialogClose} addAddress={addAddress} user={user} allGood={addAllGood} />
                                    {/* <EditAddressDialogForm open={openEditAddressDialog} onClose={handleEditAddressDialogClose} editAddress={editAddress} selectedAddress={selectedAddress} user={user} allGood={editAllGood} /> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <Grid container>
                    <HomepageFooter height='80px'/>
                </Grid>
            </div>
        </ThemeProvider>
    )
}

export default Profile;