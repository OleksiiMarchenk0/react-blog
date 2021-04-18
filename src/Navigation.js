import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul className="App_Navigation">
        <li className="App_Navigation__item">
          <NavLink to="/new">Add new Blog</NavLink>
        </li>

      </ul>
    </nav>
  );
}
