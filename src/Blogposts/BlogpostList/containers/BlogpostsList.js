import React, { useEffect } from "react";
import { fetchPosts } from "../../redux";
import { useSelector, useDispatch } from "react-redux";
import BlogpostTile from "../components/BlogpostTile";
import { NavLink } from "react-router-dom";

function Blogposts() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const postsList = posts.map((post) => {
    return (
      <>
        <li className="BlogpostList__item">
          <NavLink to={`/post/${post.id}`} key={post.id}>
            <BlogpostTile key={post.id} post={post} />{" "}
          </NavLink>
        </li>
      </>
    );
  });
  return (
    <div className="BlogpostListContainer">
      <p>Blogs List</p>
      <ul className="BlogpostList">
        {posts && posts.length ? postsList : null}
      </ul>{" "}
    </div>
  );
}

export default Blogposts;
