import React, { useEffect } from "react";
import { editPost, fetchPosts } from "../../redux";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import BlogPostEditInputForm from "../components/BlogPostEditInputForm";
export default function BlogPostEditInput() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const handleEditPost = (e) => {
    e.preventDefault();
    const postTitle = e.target.postTitleEdit.value;
    const postInformation = e.target.postInformationEdit.value;
    if(postTitle !== "" && postInformation !== "") {
        console.log(postTitle, postInformation);
        reduxEditPost(postTitle, postInformation);
      e.target.postTitleEdit.value = "";
      e.target.postInformationEdit.value = "";
    }
  };
  const reduxEditPost = (postTitle, postInformation) => {
    console.log(postTitle, postTitle);
    dispatch(editPost(id, postTitle, postInformation));
    history.push("/");
    dispatch(fetchPosts());
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return <BlogPostEditInputForm handleEditPost={handleEditPost} />;
}
