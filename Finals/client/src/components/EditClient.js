import React, { useState, useEffect } from 'react';
import { getClient, updateClient } from '../API/api';
import { useParams, useNavigate } from 'react-router-dom';
import './AddClient.css';

function EditClient() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    short_term_goal: '',
    long_term_goal: '',
    current_weight: '',
    target_weight: '',
    height: '',
    age: '',
    activity_level: '',
    diet_type: '',
    allergies: '',
    medical_conditions: '',
    meal_plan: '',
    workout_plan: '',
    progress: ''
  });

  useEffect(() => {
    getClient()
      .then(res => {
        const client = res.data.find(c => c.id === parseInt(id));
        if (client) {
          setForm(client);
        } else {
          alert("Client not found");
          navigate('/');
        }
      })
      .catch(err => console.error("Failed to fetch client", err));
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateClient(id, form)
      .then(() => {
        alert("Client updated successfully!");
        navigate('/');
      })
      .catch(err => {
        console.error("Error updating client", err);
        alert("Failed to update client.");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="client-form">
      <h2>Edit Client</h2>

      <label>Name:</label>
      <input type="text" name="name" value={form.name} onChange={handleChange} />

      <label>Email:</label>
      <input type="text" name="email" value={form.email} onChange={handleChange} />

      <label>Phone:</label>
      <input type="number" name="phone" value={form.phone} onChange={handleChange} />

      <label>Gender:</label>
      <select name="gender" value={form.gender} onChange={handleChange}>
        <option value="">Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Non-binary">Non-binary</option>
        <option value="Prefer not to say">Prefer not to say</option>
      </select>

      <label>Short-Term Goal:</label>
      <input type="text" name="short_term_goal" value={form.short_term_goal} onChange={handleChange} />

      <label>Long-Term Goal:</label>
      <input type="text" name="long_term_goal" value={form.long_term_goal} onChange={handleChange} />

      <label>Current Weight:</label>
      <input type="number" name="current_weight" value={form.current_weight} onChange={handleChange} />

      <label>Target Weight:</label>
      <input type="number" name="target_weight" value={form.target_weight} onChange={handleChange} />

      <label>Height:</label>
      <input type="number" name="height" value={form.height} onChange={handleChange} />

      <label>Age:</label>
      <input type="number" name="age" value={form.age} onChange={handleChange} />

      <label>Activity Level:</label>
      <select name="activity_level" value={form.activity_level} onChange={handleChange}>
        <option value="">Select activity level</option>
        <option value="Sedentary">Sedentary</option>
        <option value="Lightly active">Lightly active</option>
        <option value="Moderately active">Moderately active</option>
        <option value="Very active">Very active</option>
        <option value="Extremely active">Extremely active</option>
      </select>

      <label>Diet Type:</label>
      <select name="diet_type" value={form.diet_type} onChange={handleChange}>
        <option value="">Select diet type</option>
        <option value="No Preference">No Preference</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Vegan">Vegan</option>
        <option value="Keto">Keto</option>
        <option value="Pescatarian">Pescatarian</option>
      </select>

      <label>Medical Conditions:</label>
      <input type="text" name="medical_conditions" value={form.medical_conditions} onChange={handleChange} />

      <label>Allergies:</label>
      <select name="allergies" value={form.allergies} onChange={handleChange}>
        <option value="">Do they have allergies?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Meal Plan:</label>
      <input type="text" name="meal_plan" value={form.meal_plan} onChange={handleChange} />

      <label>Workout Plan:</label>
      <input type="text" name="workout_plan" value={form.workout_plan} onChange={handleChange} />

      <label>Progress:</label>
      <input type="text" name="progress" value={form.progress} onChange={handleChange} />

      <button type="submit">Update Client</button>
    </form>
  );
}

export default EditClient;

