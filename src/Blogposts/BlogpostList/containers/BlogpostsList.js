import React, { useEffect } from "react";
import { fetchPosts } from "../../redux";
import { useSelector, useDispatch } from "react-redux";
import Blogpost from "./Blogpost";

function Blogposts() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const postsList = posts.map((post) => {
    return <Blogpost post={post} key={post.id} />;
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
