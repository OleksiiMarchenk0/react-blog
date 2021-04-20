import React from "react";

export default function BlogPostForm({ handleSubmit }) {
  return (
    <form className="newBlogPostForm" onSubmit = {handleSubmit}>
    <h1>New Post</h1>
    <div>
    <input type="text" name = "postTitle" placeholder="Add post title ..."/>
    <textarea type="text" name = "postInformation" placeholder="Add post information ..."/>
    </div>
    <input type ="submit" value = "Add"/>
 </form>
  );
}
