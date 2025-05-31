import React, { useState, useEffect } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { getAppointment, deleteAppointment, } from '../API/api'

function DeleteAppointment(){
    const [appointment, setAppointment] = useState(null)
    const navigate = useNavigate()
    const params = useParams()

    useEffect(()=>{
        const fetchAppointment = async () => {
            try {
                const response = await getAppointment(params.id);
                setAppointment(response.data);
            } catch (error) {
                console.error('Error fetching appointment:', error.response?.data || error.message);
            }
        }

        fetchAppointment()
    })


    if( appointment == null ) return "No Appointments"

    return(
        <div>
            <h1>Are you sure you want to delete the following ?</h1>
            <h2>Name: {appointment.name}</h2>
            <h2>Description: {appointment.description}</h2>

            <button onClick={()=> navigate('/')}>No</button>
            <button onClick={async ()=> { await deleteAppointment(appointment._id); navigate('/') }}>Yes! I want to delete this</button>

        </div>
    )
}

export default DeleteAppointment