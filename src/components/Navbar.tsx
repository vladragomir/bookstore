import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <Link to="/books" className={classes.Link}>
        Books
      </Link>
      <Link to="/profile" className={classes.Link}>
        Profile
      </Link>
    </nav>
  );
};
