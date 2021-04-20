import React from "react";
import { NavLink } from "react-router-dom";
export default function Page404() {
  return (
    <div className="pageNotFound">
      <div>404 | Not found</div>
      <NavLink className="home" to="/">
        Back to Home
      </NavLink>
    </div>
  );
}
