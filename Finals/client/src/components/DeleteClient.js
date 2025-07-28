import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteClient, getClientById } from '../API/api'; // Import API calls
import './DeleteClient.css'; // Import external styles

function DeleteClient() {
  // State to store fetched client data
  const [client, setClient] = useState(null);

  // Hook to navigate between routes
  const navigate = useNavigate();

  // Extract route parameter (client ID)
  const params = useParams();

  // Fetch client info on component mount
  useEffect(() => {
    const fetchClient = async () => {
      // Fetch client data by ID from backend
      const res = await getClientById(params.id);
      // Store the client in state
      setClient(res.data);
    };

    fetchClient(); // Call the function
  }, [params.id]); // Dependency: re-run if ID changes

  // If client data hasn’t loaded yet, show loading message
  if (client == null)
    return <div className="delete-client-loading">Loading client data...</div>;

  return (
    <div className="delete-client-container">
      {/* Delete confirmation form */}
      <form
        className="delete-client-form"
        onSubmit={async (e) => {
          e.preventDefault(); // Prevent form refresh
          await deleteClient(params.id); // Call API to delete client
          navigate('/'); // Redirect to homepage after deletion
        }}
      >
        <h1>Delete Client Profile</h1>

        {/* Display client details to confirm deletion */}
        <div className="delete-client-details">
          <h2>{client.name}</h2>
          <p>
            <strong>Email:</strong> {client.email}
          </p>
          <p>
            <strong>Phone:</strong> {client.phone}
          </p>
        </div>

        {/* Warning message for irreversible action */}
        <p className="delete-warning">
          Are you sure you want to delete this client? This action cannot be
          undone.
        </p>

        {/* Action buttons */}
        <div className="delete-client-actions">
          {/* Cancel button navigates back without deleting */}
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate('/home')}
          >
            Cancel
          </button>

          {/* Delete button triggers form submit */}
          <button type="submit" className="delete-btn">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteClient;
