import React, { useState } from 'react';

function PostForm({ onSubmit = () => {} }) {
    const [form, setForm] = useState({
        author:"",
        content: "",
    });

    // Handle input changes for title and content
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form:', form);
        // Pass form data to parent handler
        await onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="author"
                placeholder="Author"
                required
                onChange={handleChange}
                value={form.author}
            />
            <textarea
                name="content"
                placeholder="Tell us what's on your mind?"
                required
                onChange={handleChange}
                value={form.content}
            />
            <button type="submit">Post it!</button>
        </form>
    );
}

export default PostForm;