import React, { useState } from 'react';
import {addLogin} from '../API/api';
import styles from "./Login.module.css";    

function Login({setUser}) {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addLogin(form);
            console.log(response.data);
            setUser(response.data); // Assuming the response contains user data
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Login</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input name="email" type="email" placeholder="Email" required onChange={handleChange} className={styles.input} />
                <input name="password" type="password" placeholder="Password" required onChange={handleChange} className={styles.input} />
                <button type="submit" className={styles.button}>Login</button>
            </form>
        </div>
    );
}

export default Login;