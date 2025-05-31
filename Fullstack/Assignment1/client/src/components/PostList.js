import React from 'react';

// This component displays the list of posts
function PostList({ posts }) {
  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {/* Render each post as a list item */}
        {posts.map((p, idx) => (
          <li key={p._id || idx}>{p.post}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;