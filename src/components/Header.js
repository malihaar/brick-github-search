import React from "react";
import logo from "./../assets/img/githublogo.png";
import "./../styles/Header.css";

const Header = () => {
  return (
    <div
    className="header"
    >
      <img
        className="logo"
        src={logo}
        alt={logo}
      />
      <div>
        <h1 className="title">Github Searcher</h1>
        <p className="title">Search user or repositories</p>
      </div>
    </div>
  );
};

export default Header;
