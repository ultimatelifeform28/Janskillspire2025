import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000'
})

export const addRegister = (register) => api.post('/Registration', register)
export const addLogin = (login) => api.post('/Login', login)
export const addPost = (post) => api.post('/posts', post)
export const getAllPosts = () => api.get('/posts')

