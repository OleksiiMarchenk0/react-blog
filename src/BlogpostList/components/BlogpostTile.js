import React from "react";

export default function BlogpostTile({ post }) {
  return (
    <>
      <span>{post.id},{post.text}</span>
    </>
  );
}
