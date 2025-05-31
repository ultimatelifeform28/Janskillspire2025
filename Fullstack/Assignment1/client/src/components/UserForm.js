import React, { useState } from 'react';

function UserForm({ onUserAdded }) {
  const [form, setForm] = useState({
    name: '',
    height: '',
    weight: '',
    dietary: 'No Preference'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      const newUser = await res.json();
      onUserAdded(newUser);
      setForm({ name: '', height: '', weight: '', dietary: 'No Preference' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" value={form.name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Height (cm):
        <input name="height" type="number" value={form.height} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Weight (lbs):
        <input name="weight" type="number" value={form.weight} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Dietary Preference:
        <select name="dietary" value={form.dietary} onChange={handleChange}>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="No Preference">No Preference</option>
        </select>
      </label>
      <br />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;