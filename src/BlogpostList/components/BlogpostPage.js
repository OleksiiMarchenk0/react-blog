import React, { } from "react";
 import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import { fetchPost } from "../../redux";

export default function BlogpostPage() {
  const post = useSelector((state) => state.posts.posts);
 //  const dispatch = useDispatch();
 const { id } = useParams();
 console.log(post);
  // useEffect(() => {
  //   dispatch(fetchPost(id));
  // }, [ ]);
  
  console.log(id);
  return <div>{id}</div>;
}
