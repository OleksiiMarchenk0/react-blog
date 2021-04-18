import React, { useState } from "react";

export default function PostPage({ post, handleRemovePost, handleEditPost }) {
  const { id, text } = post;
  const [isEdit, setIsEdit] = useState(false);
  const [val, newVal] = useState(text);
  const handleMessageChange = (event) => {
    newVal(event.target.value);
  };
  return (
    <div>
      {id} - {text}
      <button onClick={() => handleRemovePost(post)}>Delete this post</button>
      <button onClick={() => setIsEdit(true)}>Edit this post</button>
      {isEdit ? (
        <>
          {" "}
          <textarea onChange={handleMessageChange} placeholder="nowa zawartość" value={val} name="editable"></textarea>
          <button onClick={() => handleEditPost(post, val)}>
            Save changes
          </button>{" "}
        </>
      ) : null}
    </div>
  );
}
