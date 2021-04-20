import React from "react";
import { useDispatch } from "react-redux";
import BlogPostForm from "../components/BlogPostForm";
import { useHistory } from "react-router-dom";
import { setPost } from "../../redux";

function BlogPostFormContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const postTitle = e.target.postTitle.value;
    const postInformation = e.target.postInformation.value;
    if((postTitle !== "")&&(postInformation !== "")) {
      dispatch(setPost(postTitle, postInformation));
      e.target.postTitle.value = "";
      e.target.postInformation.value = "";
      history.push("/");
    }
  };
  return <BlogPostForm handleSubmit={handleSubmit} />;
}
export default BlogPostFormContainer;
