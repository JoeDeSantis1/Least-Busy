import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    div: {
        paddingTop: '20px'
    },
    textField: {
        width: '700px',
        color: 'black',
        borderWidth: 2,
        borderColor: '#04C8B4',
        [theme.breakpoints.down('sm')]: {
            width: '555px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '345px',
        },
    }
}))


const SearchBar = (props) => {
    const { handleSearch } = props;
    const classes = useStyles();
    const [text, setText] = useState('');

    const handleChange = ({target}) => {
        const input = target.value;
        handleSearch(input);

        setText(input)
    }

    // Disables the enter key to prevent the page from refreshing
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    }
    

    
    return (
        <div className={classes.div}>
            <TextField className={classes.textField} id='search bar' label='Search within your saved restaurants' variant="filled" value={text} onKeyPress={handleEnter} onChange={handleChange} size='small' />
        </div>
    );
}

export default SearchBar;