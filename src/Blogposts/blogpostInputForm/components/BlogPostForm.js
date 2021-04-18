import React from "react";

export default function BlogPostForm({ handleSubmit }) {
  return (
    <form className="newBlogPostForm" onSubmit = {handleSubmit}>
    <textarea type="text" name = "post" placeholder="Add blogpost ..."/>
    <input type ="submit" value = "Add"/>
 </form>
  );
}
