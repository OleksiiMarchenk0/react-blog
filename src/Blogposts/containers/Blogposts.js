import { useEffect } from "react";
import { fetchPosts } from "../redux";
import Blogpost from "../components/Blogpost";
import { useSelector, useDispatch } from "react-redux";

function Blogposts() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if(posts) {
    return (
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Blogpost post={post} />{" "}
            </li>
          );
        })}
        {" "}
      </ul>
    );
  }
}

export default Blogposts;
