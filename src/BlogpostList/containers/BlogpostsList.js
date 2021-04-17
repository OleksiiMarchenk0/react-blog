import { useEffect } from "react";
import { fetchPosts, removePost } from "../../redux";
import { useSelector, useDispatch } from "react-redux";
// import BlogPostForm from "../../blogpostInputForm/containers/BlogPostForm";
import BlogpostTile from "../components/BlogpostTile";
import BlogpostPage from "../components/BlogpostPage";

import { NavLink, Switch, Route } from "react-router-dom";
function Blogposts() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [ ]);
// const [isEdit, setIsEdit] =useState(false);
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
      {/* {isEdit?<BlogPostForm/> :null} */}
      <li key={post.id}>
      <NavLink to={`/post/${post.id}`}>
        <BlogpostTile post={post} handleRemovePost={handleRemovePost} handleEditPost = {handleEditPost}/>{" "}
      </NavLink>
      </li>
      <Switch>
        <Route path="/post/:id" component={BlogpostPage} />
      </Switch>
      </>
    );
  });
  return <ul className="BlogpostList">{posts && posts.length ? postsList : null}</ul>;
}

export default Blogposts;
