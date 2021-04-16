import React from "react";

export default function Blogpost({ post, handleRemovePost }) {
  return (
    <>
      <span>{post.text}</span>
      <button onClick={() => handleRemovePost(post)}>
        Delete this post
      </button>
    </>
  );
}
