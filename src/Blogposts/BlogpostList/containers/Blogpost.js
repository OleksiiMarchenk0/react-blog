import React from "react";
import BlogpostTile from "../components/BlogpostTile";
import { NavLink } from "react-router-dom";

export default function Blogpost({ post }) {
  return (
    <li className="BlogpostList__item">
      <NavLink to={`/post/${post.id}`}>
        <BlogpostTile key={post.id} post={post} />{" "}
      </NavLink>
    </li>
  );
}
