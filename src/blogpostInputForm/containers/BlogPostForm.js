import React from "react";
import BlogPostForm from "../components/BlogPostForm";
export default function BlogPostFormContainer() {
    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date();
        const postData = {
          post: e.target.post.value,
          date: date
        };
        console.log(postData);
      };
    return (
     <BlogPostForm handleSubmit = {handleSubmit}/>
    );
}
