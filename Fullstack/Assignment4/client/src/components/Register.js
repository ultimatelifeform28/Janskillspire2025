import React, { useState } from 'react';
import { addRegister } from '../API/api';
import styles from "./Register.module.css";
   

function Register({ setUser }) {
    const [form, setForm] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addRegister(form);
            console.log(response.data);
            setUser(response.data); // Assuming the response contains user data
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    return (
       <div className={styles.container}>
      <h2 className={styles.title}>Create an Account</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input name="firstName" placeholder="First Name" required onChange={handleChange} className={styles.input} />
        <input name="lastName" placeholder="Last Name" required onChange={handleChange} className={styles.input} />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} className={styles.input} />
        <input name="password" type="password" placeholder="Password" required onChange={handleChange} className={styles.input} />
        <button type="submit" className={styles.button}>Register</button>
      </form>
    </div>
  );
}

export default Register;



