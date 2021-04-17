import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost, removePost, fetchPosts } from "../../redux";
import PostPage from "../components/PostPage";


function BlogpostPage() {
  const history = useHistory();
  const { id } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, []);

  const handleRemovePost = (post) => {
    dispatch(removePost(post.id));
    history.push("/");
    dispatch(fetchPosts());
  };

  const handleEditPost = (post) => {
    console.log("id", post.id);
    // dispatch(removePost(post.id));
  };
  return (
    <>
      <PostPage
        posts={posts}
        handleRemovePost={handleRemovePost}
        handleEditPost={handleEditPost}
      />
    </>
  );
}

export default BlogpostPage;
