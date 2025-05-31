import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000'
})

export const getAllPosts = () => api.get('/')
export const createPost = (post) => api.post('/', post);


export const getAllUsers = () => api.get('/api/users')
export const createUser = (user) => api.post('/api/users', user);
export const getUserById = (id) => api.get(`/api/users/${id}`)



