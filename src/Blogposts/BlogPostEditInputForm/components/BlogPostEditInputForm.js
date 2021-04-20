import React from "react";

export default function BlogPostEditInputForm({ handleEditPost }) {
  return (
    <div className="EditPostContainer">
      <form onSubmit={handleEditPost} className="EditPost">
        <h1>Edit Post</h1>
        <div>
          <input
            type="text"
            name="postTitleEdit"
            placeholder="Edit title ..."
          />
          <textarea
            placeholder="Edit information ..."
            name="postInformationEdit"
          ></textarea>
        </div>
        <input type="submit" value="Save changes" />
      </form>
    </div>
  );
}
