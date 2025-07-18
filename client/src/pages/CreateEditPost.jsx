import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postService, categoryService } from "../services/api";
import { AuthContext } from "../context/AuthContext";

const CreateEditPost = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    categoryService.getAllCategories().then(setCategories);
    if (id) {
      postService.getPost(id).then((post) => {
        setTitle(post.title);
        setContent(post.content);
        setCategory(post.category?._id || "");
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = { title, content, category, author: user?.username };
      if (id) {
        await postService.updatePost(id, postData);
      } else {
        await postService.createPost(postData);
      }
      navigate("/");
    } catch (err) {
      setError("Failed to save post");
    }
  };

  return (
    <div>
      <h2>{id ? "Edit" : "Create"} Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
        <button type="submit">{id ? "Update" : "Create"} Post</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CreateEditPost;
