import React, { useEffect, useState } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";
import { getAllPosts } from "../API/api";
import { addPost } from "../API/api"; // Assuming you have an API function to add a post

function Feed({ user }) {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    try {
      const { data } = await getAllPosts();
      console.log('Posts from backend:', data);
      console.log(data); 
      setPosts(data);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    }
  };

  // This function will be passed to PostForm
  const handlePostSubmit = async (form) => {
    try {
      await addPost(form);
      await loadPosts();
    } catch (err) {
      console.error("Failed to add post:", err);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <h2>Welcome, {user.firstName}!</h2>
      <PostForm onSubmit={handlePostSubmit} />
      <PostList posts={posts} />
    </div>
  );
}

export default Feed;
