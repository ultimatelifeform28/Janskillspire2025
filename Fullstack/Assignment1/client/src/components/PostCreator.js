import React, { useState, useEffect } from 'react';

function PostCreator() {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);

  // Fetch posts on mount
  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!post.trim()) return;

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post })
    });
    const newPost = await res.json();
    setPosts([newPost, ...posts]);
    setPost('');
  };

  return (
    <div>
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
      <h3>Posts</h3>
      <ul>
        {posts.map((p, idx) => (
          <li key={p._id || idx}>{p.post}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostCreator;