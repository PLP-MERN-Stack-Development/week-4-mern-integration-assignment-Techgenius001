import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postService } from "../services/api";

const PostView = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    postService.getPost(id).then((data) => {
      setPost(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Category: {post.category?.name}</p>
      <p>Author: {post.author}</p>
    </div>
  );
};

export default PostView;
