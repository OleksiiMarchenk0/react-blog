import React, { useState } from "react";
import { useSelector } from "react-redux";
import Comments from "../../../Comments/container/Comments";
import BlogPostEditInput from "../../BlogPostEditInputForm/containers/BlogPostEditInput";
export default function PostPage({ id, handleRemovePost }) {
  const post = useSelector((state) => state.posts.post);
  const { postTitle, postInformation } = post;
  const [isEdit, setIsEdit] = useState(false);


  return (
    <div className="PostPage">
      <div className="Post">
        <p className="header">{postTitle}</p>
        <span> {postInformation} </span>
        <div className="PostPage__buttons">
          <button onClick={() => handleRemovePost(post)}>
            Delete this post
          </button>
          <button onClick={() => setIsEdit(true)}>Edit this post</button>
        </div>
      </div>

      {isEdit ? (
        <BlogPostEditInput
        />
      ) : null}
      <Comments blogPostId={id} />
    </div>
  );
}
