import { useEffect } from "react";
import { fetchPosts, removePost } from "../../redux";
import { useSelector, useDispatch } from "react-redux";
import Blogpost from "../components/Blogpost";

function Blogposts() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [ ]);

  const handleRemovePost = (post) => {
    console.log("id", post.id);
    dispatch(removePost(post.id));
  };
  const postsList = posts.map((post) => {
    return (
      <li key={post.id}>
        <Blogpost post={post} handleRemovePost={handleRemovePost} />{" "}
      </li>
    );
  });
  return <ul>{posts && posts.length ? postsList : null}</ul>;
}

export default Blogposts;
