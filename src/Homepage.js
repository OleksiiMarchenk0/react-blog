import React from "react";
import BlogpostsList from "./Blogposts/BlogpostList/containers/BlogpostsList";
import BlogPostForm from "./Blogposts/blogpostInputForm/containers/BlogPostForm";

const Homepage = () => {
  return (
    <>
      <BlogPostForm />
      <BlogpostsList />
    </>
  );
};

export default Homepage;
