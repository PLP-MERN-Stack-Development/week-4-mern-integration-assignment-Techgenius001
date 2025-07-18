import React, { useEffect, useState } from "react";
import { postService } from "../services/api";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    postService.getAllPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
