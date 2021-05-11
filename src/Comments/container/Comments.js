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
  }, [blogPostId, dispatch]);

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
    <div className="Comments">
      <p className="header">Comments</p>
      <CommentInput handleComment={handleComment} />
      <div className="CommentsList">
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>
    </div>
  );
}
export default Comments;
