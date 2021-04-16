import React from "react";
import { useDispatch } from "react-redux";
import BlogPostForm from "../components/BlogPostForm";
import { setPost } from "../../redux";

function BlogPostFormContainer() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const postValue = e.target.post.value;
    dispatch(setPost(postValue));
    e.target.post.value="";
  };
  return <BlogPostForm handleSubmit={handleSubmit} />;
}
export default BlogPostFormContainer;
