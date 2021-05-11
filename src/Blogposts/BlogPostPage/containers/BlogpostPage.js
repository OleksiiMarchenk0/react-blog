import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPost, removePost, fetchPosts } from "../../redux";
import PostPage from "../components/PostPage";

function BlogpostPage() {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const handleRemovePost = (post) => {
    dispatch(removePost(post.id));
    history.push("/");
    dispatch(fetchPosts());
  };

  return (
    <>
      <PostPage
      id={id}
        handleRemovePost={handleRemovePost}
      />
    </>
  );
}

export default BlogpostPage;
