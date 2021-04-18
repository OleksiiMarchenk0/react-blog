import React from "react";
import BlogpostsList from "./BlogpostList/containers/BlogpostsList";
import BlogPostForm from "./blogpostInputForm/containers/BlogPostForm";

const Homepage = () => {
  return (
    <>
      <BlogPostForm />
      <BlogpostsList />
    </>
  );
};

export default Homepage;
