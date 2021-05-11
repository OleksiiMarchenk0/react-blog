import React from "react";
import { FaAngleLeft } from "react-icons/fa";

export default function BlogPostEditInputForm({ handleEditPost, handleBack }) {
  return (
    <div className="EditPostContainer">
      <form onSubmit={handleEditPost} className="EditPost">
      <button onClick={handleBack} className="btn btn_back">
    <FaAngleLeft />
    </button>
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
