import React from "react";

export default function PostPage({ posts }) {
  const post = posts[0];
  const { id, text } = post;

  return (
    <div>
      {id} - {text}
    </div>
  );
}
