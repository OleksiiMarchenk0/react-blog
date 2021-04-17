import React from "react";

export default function PostPage({ posts, handleRemovePost, handleEditPost }) {
  const post = posts[0];
  const { id, text } = post;

  return (
    <div>
      {id} - {text}
      <button onClick={() => handleRemovePost(post)}>
        Delete this post
      </button>
      <button onClick={() => handleEditPost(post)}>
        Edit this post
      </button>
    </div>
  );
}
