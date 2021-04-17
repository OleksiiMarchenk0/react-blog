import React from "react";

export default function BlogpostTile({ post, handleRemovePost, handleEditPost }) {
  return (
    <>
      <span>{post.id},{post.text}</span>
      <button onClick={() => handleRemovePost(post)}>
        Delete this post
      </button>
      <button onClick={() => handleEditPost(post)}>
        Edit this post
      </button>
    </>
  );
}
