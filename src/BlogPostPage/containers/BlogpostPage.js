import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../../redux";
 import PostPage from "../components/PostPage";

 function BlogpostPage() {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost(id));
  }, []);
  console.log(posts);
  return (
    <>
      <PostPage posts = {posts} />
    </>
  );
}

export default BlogpostPage;
