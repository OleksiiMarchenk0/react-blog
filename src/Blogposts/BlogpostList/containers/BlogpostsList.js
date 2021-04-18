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
  }, []);

  const postsList = posts.map((post) => {
    return (
      <>
        <li class="BlogpostList__item" key={post.id}>
          <NavLink to={`/post/${post.id}`}>
            <BlogpostTile post={post} />{" "}
          </NavLink>
        </li>
      </>
    );
  });
  return (
    <div class="BlogpostListContainer">
      <p>Blogs List</p>
      <ul className="BlogpostList">
        {posts && posts.length ? postsList : null}
      </ul>{" "}
    </div>
  );
}

export default Blogposts;
