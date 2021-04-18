import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/new">Add new Blog</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Show Posts</NavLink>
        </li>
      </ul>
    </>
  );
}
