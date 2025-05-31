import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAllAppointments, addAppointment } from '../API/api';

function AppointmentList() {
    const [appointments, setAppointments] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAppointment = async () => {
            const response = await getAllAppointments();
            console.log(response.data);
            setAppointments(response.data);
        };

        fetchAppointment();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let name = e.target['name'].value;
        let description = e.target['description'].value;
        let date = e.target['date'].value; // Get the selected date

        const response = await addAppointment({ name, description, date });
        console.log('Appointment added:', response.data);
    };

    if (appointments == null) return "No Appointments";

    return (
        <div>
            <h2>New Appointments</h2>
            <form 
                onSubmit={handleSubmit} 
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    maxWidth: '300px',
                    margin: '20px auto',
                    padding: '15px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    backgroundColor: '#f9f9f9',
                }}
            >
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    required 
                    style={{
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                />
                <input 
                    type="text" 
                    name="description" 
                    placeholder="Description" 
                    required 
                    style={{
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                />
                <input 
                    type="date" 
                    name="date" 
                    required 
                    style={{
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                />
                <button 
                    type="submit" 
                    style={{
                        padding: '10px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Add Appointment
                </button>
            </form>
            <ul>
                {appointments.map((appointment) => (
                    <li key={appointment.id}>
                        {appointment.name} - {appointment.description} - {appointment.date}
                        <Link to={`/delete/${appointment.id}`}>cancel</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AppointmentList;