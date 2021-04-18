import React from "react";

export default function CommentInput({ handleComment }) {
  return (
    <>
      <form onSubmit = {handleComment}>
    <textarea type="text" name = "comment" placeholder="Add comment ..."/>
    <input type ="submit" value = "Add"/>
 </form>
    </>
  );
}
