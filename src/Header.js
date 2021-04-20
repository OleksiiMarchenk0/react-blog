import React from "react";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
export default function Header() {
    return (
        <header>
        <NavLink className="home" to="/">Home</NavLink>
            <Navigation/>
        </header>
    );
}
