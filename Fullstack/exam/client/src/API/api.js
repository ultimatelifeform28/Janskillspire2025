import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000'
})

export const getAllAppointments = () => api.get('/appointments')
export const addAppointment = (data) => api.post('/appointments', data)
export const deleteAppointment = (id) => api.delete(`/appointments/id`)
export const getAppointment = (id) => api.get(`/appointments/id`)