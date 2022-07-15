import React, {useState, useEffect} from 'react';
import Spinner from '../UI/Spinner';

export default function UserPicker () {
    const [users, setUsers] = useState(null);

    useEffect(() => { // fetch the data from inside an effect function
        console.log('fetching users...');
        fetch('http://localhost:8080/api/users')
            .then(resp => resp.json())
            .then(data => setUsers(data));
    }, []);

    if (users === null) {
        return <Spinner/>;
    }

    return (
        <select>
            {users.map(u => (
                <option key={u.id}>{u.name}</option>
            ))}
        </select>
    );
}