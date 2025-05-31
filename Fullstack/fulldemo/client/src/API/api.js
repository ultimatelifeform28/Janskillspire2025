import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:8000'
});

export const getBooks =() => api.get('/books')
export const addBook = (book) =>api.post('/addbook', book)
export const editBook = ( book) => api.put('/updatebook', book)
export const deleteBook = (id) => api.delete(`/books/${id}`)