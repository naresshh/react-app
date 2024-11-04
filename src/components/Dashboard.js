import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/user', { withCredentials: true })
            .then(response => {
                setUser(response.data);
            }).catch(error => {
                console.error('Error Occurred', error);
            });
    }, []);

    return (
        <div>
            <h2>Hello in Dashboard</h2>
            {user ? (
                <div>
                    <p><strong>Name: </strong>{user.name}</p>
                    <p><strong>Email: </strong>{user.email}</p>
                    <p><strong>FamilyName: </strong>{user.family_name}</p>
                </div>
            ) : (<p>Loading user data</p>)}
        </div>
    );
};

export default Dashboard;
