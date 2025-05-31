import React, { useState } from 'react';


// This component handles the post submission form
function PostForm({ onPostAdded }) {
  const [post, setPost] = useState('');

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!post.trim()) return; // Prevent empty submissions

    // Send POST request to backend
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post })
    });
    if (res.ok) {
      const newPost = await res.json();
      onPostAdded(newPost); // Notify parent to update post list
      setPost(''); // Clear textarea
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="post">Post:</label>
      <br />
      <textarea
        id="post"
        name="post"
        value={post}
        onChange={e => setPost(e.target.value)}
        rows={4}
        cols={50}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;