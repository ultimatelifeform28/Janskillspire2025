import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000'
})

export const getAllCourses = () => api.get('/courses')
export const addCourse = (course) => api.post('/courses', course)
export const getCourse = (id) => api.get(`/courses/${id}`)
export const deleteCourse = (id) => api.delete(`/courses/${id}`)