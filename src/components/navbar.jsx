import React, { Component } from "react";

//Stateless Functional Component -sfc
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navber navbar-light bg-light">
      <a href="#" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
