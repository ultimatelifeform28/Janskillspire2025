import React, { useState, useEffect } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';

// PostManager handles fetching, adding, and displaying posts
function PostManager() {
  const [posts, setPosts] = useState([]);

  // Fetch all posts on mount
  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  // Add new post to the top of the list
  const handlePostAdded = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <PostForm onPostAdded={handlePostAdded} />
      <hr />
      <PostList posts={posts} />
    </div>
  );
}

export default PostManager;