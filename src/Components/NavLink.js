import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ to, style, children }) {
    return (
        <Link to={to} className={style}> {children} </Link>
    )
}