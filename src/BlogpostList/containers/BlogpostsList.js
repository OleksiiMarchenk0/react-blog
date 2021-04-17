import React, { useEffect } from "react";
import { fetchPosts, removePost } from "../../redux";
import { useSelector, useDispatch } from "react-redux";
import BlogpostTile from "../components/BlogpostTile";
import { NavLink } from "react-router-dom";

function Blogposts() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("list");
    dispatch(fetchPosts());
  }, []);

  const handleRemovePost = (post) => {
    console.log("id", post.id);
    dispatch(removePost(post.id));
  };
  const handleEditPost = (post) => {
    // setIsEdit(true);
    console.log("id", post.id);
    dispatch(removePost(post.id));
  };
  const postsList = posts.map((post) => {
    return (
      <>
        <li key={post.id}>
          <NavLink to={`/post/${post.id}`}>
            <BlogpostTile
              post={post}
              handleRemovePost={handleRemovePost}
              handleEditPost={handleEditPost}
            />{" "}
          </NavLink>
        </li>
      </>
    );
  });
  return (
    <ul className="BlogpostList">{posts && posts.length ? postsList : null}</ul>
  );
}

export default Blogposts;
