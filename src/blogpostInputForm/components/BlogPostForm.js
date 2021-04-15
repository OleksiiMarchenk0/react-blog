import React from "react";

export default function BlogPostForm({ handleSubmit }) {
  return (
    <form onSubmit = {handleSubmit}>
    <input type="text" name = "post" placeholder="Wpis ..."/>
    <input type ="submit" value = "Dodaj wpis"/>
 </form>
  );
}
