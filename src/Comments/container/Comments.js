import React, { useEffect } from "react";
import Comment from "../components/Comment.js";
import CommentInput from "../components/CommentInput.js";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments, setComment } from "../redux";

function Comments({ blogPostId }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);

  useEffect(() => {
    dispatch(fetchComments(blogPostId));
  }, []);

  const handleComment = (e) => {
    e.preventDefault();
    const commentValue = e.target.comment.value;
    if(commentValue !== "") {
       dispatch(setComment(commentValue, blogPostId));
      e.target.comment.value = "";
      dispatch(fetchComments(blogPostId));
    }
  };
  return (
    <>
      <h1>Comments</h1>
      <CommentInput handleComment={handleComment} />
      {comments.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </>
  );
}
export default Comments;
