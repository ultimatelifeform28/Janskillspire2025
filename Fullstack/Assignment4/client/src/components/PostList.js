import React from "react";

function PostList({ posts }) {
  return (
    <div>
      <h3>News Feed</h3>
      {posts.map((post, i) => (
        <div key={i}>
          <strong>{post.author}</strong>: {post.content}
        </div>
      ))}
    </div>
  );
}

export default PostList;
