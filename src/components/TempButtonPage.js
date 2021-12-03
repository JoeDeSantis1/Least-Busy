import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';


const TempButtonPage = () => {
    const [fromProtected, setFromProtected] = useState('This will show protected message');
    const [fromUnprotected, setFromUnprotected] = useState('This will show the unprotected message');
    
    const { getAccessTokenSilently, user } = useAuth0();

    
    const protectedButton = async () => {
        const token = await getAccessTokenSilently();
        const { sub } = user;
        
        console.log(token);
        
        setFromProtected(sub);
        // try{
        //     const token = await getAccessTokenSilently();
            
        //     fetch('http://localhost:4000/protected', {
        //         method: 'GET',
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //         },
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         setFromProtected(data.message);
        //     })
        // } catch (error) {
        //     console.error(error);
        // }   
    }

    const unprotectedButton = () => {
        fetch('http://localhost:4000/unprotected')
        .then(res => res.json())
        .then(data => {
            setFromUnprotected(data.message);
        });
    }

    return(
        <div>
            <Button onClick={protectedButton} variant='contained' color='primary'>Protected</Button>{' '}
            <Button onClick={unprotectedButton} variant='contained' color='secondary'>From Unprotected</Button>
            <Typography>
                {fromProtected}
            </Typography>
            <Typography>
                {fromUnprotected}
            </Typography>
        </div>
    )
}

export default TempButtonPage;