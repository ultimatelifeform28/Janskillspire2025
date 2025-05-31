import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ClientList.css';
import { getClient } from '../API/api';

// Component to display a list of clients
function ClientLists() {
  const [client, setClient] = useState(null);

  // Fetch clients from the backend API when the component mounts
  useEffect(() => {
    console.log("Fetching clients...");
    const catchclient = async () => {
      const res = await getClient();
      console.log(res.data);
      setClient(res.data);
    };
    catchclient();
  }, []);

  if (!client) {
    return <div>Loading clients...</div>;
  }

  return (
    <div className="client-list">
      <h1>Client Dashboard</h1>

      {/* Button to route to the Add Client page */}
      <Link to="/AddClient">
        <button>Add New Client</button>
      </Link>

      {client.length === 0 ? (
        <p>No clients available.</p>
      ) : (
        client.map(client => (
          <div className="client-card" key={client.id}>
            <h2>{client.name}</h2>
            <p><strong>Email:</strong> {client.email}</p>
            <p><strong>Phone:</strong> {client.phone}</p>
            <p><strong>Gender:</strong> {client.gender}</p>
            <p><strong>Age:</strong> {client.age}</p>
            <p><strong>Weight:</strong> {client.current_weight} ➡ {client.target_weight} lbs</p>
            <p><strong>Height:</strong> {client.height} cm</p>
            <p><strong>Short-Term Goal:</strong> {client.short_term_goal}</p>
            <p><strong>Long-Term Goal:</strong> {client.long_term_goal}</p>
            <p><strong>Activity Level:</strong> {client.activity_level}</p>
            <p><strong>Diet:</strong> {client.diet_type}</p>
            <p><strong>Allergies:</strong> {client.allergies}</p>
            <p><strong>Medical Conditions:</strong> {client.medical_conditions}</p>
            <p><strong>Workout Plan:</strong> {client.workout_plan}</p>
            <p><strong>Meal Plan:</strong> {client.meal_plan}</p>
            <p><strong>Progress:</strong> {client.progress}</p>

            {/* Edit Button */}
            <Link to={`/edit/${client.id}`}>
              <button>Edit</button>
            </Link>
            {/* Delete Button */}
            <Link to={`/delete/${client.id}`}>
              <button className="delete-btn">Delete</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default ClientLists;
