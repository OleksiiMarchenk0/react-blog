import React from "react";

export default function BlogPostEditInput(
  handleMessageChange,
  handleEditPost,
  val,
  post
) {
  return (
    <div className="EditPostContainer">
      <form onSubmit={() => handleEditPost(post, val)} className="EditPost">
        <textarea
          onChange={handleMessageChange}
          placeholder="nowa zawartość"
          value={val}
          name="editable"
        ></textarea>
        <input type="submit" value="Save changes" />
      </form>
    </div>
  );
}
