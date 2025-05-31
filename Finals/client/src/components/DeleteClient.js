import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteClient, getClientById } from '../API/api';
import './DeleteClient.css'; // Import the stylesheet


function DeleteClient() {
    const [client, setClient] = useState(null);
    const navigate = useNavigate();
    const params = useParams();


    useEffect(() => {
        const fetchClient = async () => {
            const res = await getClientById(params.id);
            
            setClient(res.data);
        }

        fetchClient();
    }, [params.id]);

    if (client == null) return <div className="delete-client-loading">Loading client data...</div>;

    return ( 
        <div className="delete-client-container">
            <form className="delete-client-form" onSubmit={async (e) => {
                e.preventDefault();
                await deleteClient(params.id);
                navigate('/');
            }}>
                <h1>Delete Client Profile</h1>
                <div className="delete-client-details">
                    <h2>{client.name}</h2>
                    <p><strong>Email:</strong> {client.email}</p>
                    <p><strong>Phone:</strong> {client.phone}</p>
                </div>
                <p className="delete-warning">Are you sure you want to delete this client? This action cannot be undone.</p>
                <div className="delete-client-actions">
                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => navigate('/home')} > Cancel</button>
                    <button
                        type="submit"
                        className="delete-btn">Delete</button>
                </div>
            </form>
        </div>
    );
}

export default DeleteClient;