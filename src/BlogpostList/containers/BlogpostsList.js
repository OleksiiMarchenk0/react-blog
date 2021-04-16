import { useEffect } from "react";
import { fetchPosts } from "../../redux";
import { useSelector, useDispatch } from "react-redux";
import Blogpost from "../components/Blogpost";

function Blogposts() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [ ]);

  const handleRemovePost = (post) => {
    console.log(post);
  };


  const postsList = posts.map((post) => {
    return (
      <li key={post.id}>
        <Blogpost post={post} handleRemovePost={handleRemovePost.bind(this)} />{" "}
      </li>
    );
  });
  return <ul>{posts && posts.length ? postsList : null}</ul>;
}

export default Blogposts;
