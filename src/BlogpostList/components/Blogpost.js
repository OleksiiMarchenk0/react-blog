import React from "react";

export default function Blogpost({ post, handleRemovePost }) {
  return (
    <>
      <span>{post.id},{post.text}</span>
      <button onClick={() => handleRemovePost(post)}>
        Delete this post
      </button>
    </>
  );
}
