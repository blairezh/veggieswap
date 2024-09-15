import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Account() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('/api/user/', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(response => setUser(response.data))
        .catch(error => console.error('Error fetching user data:', error));
    }, []);
    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Profile</h1>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default Account;