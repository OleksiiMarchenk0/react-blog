import React from "react";
import { FaAngleLeft } from "react-icons/fa";

export default function BlogPostForm({ handleSubmit, handleBack }) {
  return (
    <form className="newBlogPostForm" onSubmit = {handleSubmit}>
    <button onClick={handleBack} className="btn btn_back">
    <FaAngleLeft />
    </button>
    <h1>New Post</h1>
    <div>
    <input type="text" name = "postTitle" placeholder="Add post title ..."/>
    <textarea type="text" name = "postInformation" placeholder="Add post information ..."/>
    </div>
    <input type ="submit" value = "Add"/>
 </form>
  );
}
