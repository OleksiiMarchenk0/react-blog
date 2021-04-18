import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost, removePost, fetchPosts, editPost } from "../../redux";
import PostPage from "../components/PostPage";

function BlogpostPage() {
  const history = useHistory();
  const { id } = useParams();
  const post = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, []);

  const handleRemovePost = (post) => {
    dispatch(removePost(post.id));
    history.push("/");
    dispatch(fetchPosts());
  };

  const handleEditPost = (post, newBlogPostTextValue) => {
    dispatch(editPost(post.id, newBlogPostTextValue));
    history.push("/");
    dispatch(fetchPosts());
  };
  return (
    <>
      <PostPage
        post={post}
        handleRemovePost={handleRemovePost}
        handleEditPost={handleEditPost}
      />
    </>
  );
}

export default BlogpostPage;
