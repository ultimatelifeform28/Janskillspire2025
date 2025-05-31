import React, { useState } from 'react';
import {useNavigate, useParams, } from 'react-router-dom';
import { editBook } from '../API/api';

function EditBookForm() {
    const navigate = useNavigate();
    const params = useParams();
   

    const handleSubmit = async (e) => {
        e.preventDefault();

        let title = e.tartget['title'].value;
        let author = e.target['author'].value;

        const response = await editBook({ title:title, author:author, id:params.id });

        console.log(' Response from DB', response.data);

        navigate('/'); // Redirect to the book list after editing
    }



    return <div>
        <h2>Edit this book:</h2>
        <form on Submit={handleSubmit}>
            <input type="text" placeholder ="Title" name="title" required />
            <input type="text" placeholder ="Author" name="author" required />
            <button type="submit">Edit Book</button>

        </form>
        
    </div>
}

export default EditBookForm;