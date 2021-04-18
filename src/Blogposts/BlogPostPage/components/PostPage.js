import React, { useState } from "react";
import Comments from "../../../Comments/container/Comments";
import BlogPostEditInput from "../../BlogPostEditInputForm/BlogPostEditInput";
export default function PostPage({
  post,
  id,
  handleRemovePost,
  handleEditPost,
}) {
  const { text } = post;
  const [isEdit, setIsEdit] = useState(false);
  const [val, newVal] = useState(text);
  const handleMessageChange = (event) => {
    newVal(event.target.value);
  };
  return (
    <div className="PostPage">
      <div className="Post">
        <p className="header">{text}</p>
        <div className="PostPage__buttons">
          <button onClick={() => handleRemovePost(post)}>
            Delete this post
          </button>
          <button onClick={() => setIsEdit(true)}>Edit this post</button>
        </div>
      </div>

      {isEdit ? (
        <BlogPostEditInput
          handleMessageChange={handleMessageChange}
          handleEditPost={handleEditPost}
          val={val}
          post={post}
        />
      ) : null}
      <Comments blogPostId={id} />
    </div>
  );
}
