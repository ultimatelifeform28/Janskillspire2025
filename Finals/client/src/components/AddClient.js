import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddClient as addClientAPI } from '../API/api';
import './AddClient.css';

function AddClient() {
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
    medical_conditions: '',
    allergies: '',
    meal_plan: '',
    workout_plan: '',
    progress: ''
  });

  const requiredFields = ['name', 'email', 'phone', 'gender'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let field of requiredFields) {
      if (!form[field]) {
        alert(`Please fill out the ${field} field.`);
        return;
      }
    }

    try {
      await addClientAPI(form);
      navigate('/');
    } catch (error) {
      console.error("There was an error adding the client!", error);
      alert("Failed to add client. Please check your inputs or try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="client-form">
      <h2>Add New Client</h2>

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

      <label>Current Weight:</label>
      <input type="number" name="current_weight" value={form.current_weight} onChange={handleChange} />

      <label>Target Weight:</label>
      <input type="number" name="target_weight" value={form.target_weight} onChange={handleChange} />

      <label>Height:</label>
      <input type="number" name="height" value={form.height} onChange={handleChange} />

      <label>Short-Term Goal:</label>
      <input type="text" name="short_term_goal" value={form.short_term_goal} onChange={handleChange} />

      <label>Long-Term Goal:</label>
      <input type="text" name="long_term_goal" value={form.long_term_goal} onChange={handleChange} />

      <label>Diet Type:</label>
      <select name="diet_type" value={form.diet_type} onChange={handleChange}>
        <option value="">Select diet type</option>
        <option value="No Preference">No Preference</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Vegan">Vegan</option>
        <option value="Keto">Keto</option>
        <option value="Pescatarian">Pescatarian</option>
      </select>

      <label>Progress:</label>
      <input type="text" name="progress" value={form.progress} onChange={handleChange} />

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

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddClient;

