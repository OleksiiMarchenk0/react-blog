import React, { useEffect } from "react";
import Comment from "../components/Comment.js";
import CommentInput from "../components/CommentInput.js";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../redux";

function Comments({ blogPostId }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);

  useEffect(() => {
    dispatch(fetchComments(blogPostId));
  }, []);

  return (
    <>
      <h1>Komentarze</h1>
      <CommentInput />
      {comments.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </>
  );
}
export default Comments;
