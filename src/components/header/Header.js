import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import "./Header.css";
import Search from "./Search";

const Header = () => {
  const navList = [
    "sale",
    "new in",
    "designers",
    "clothing",
    "shoes",
    "bag",
    "accesories",
    "vintage",
    "JEWELRY",
    "watches",
    "ipo",
  ];

  return (
    <header>
      <div className="header content">
        <Logo />
      </div>
      <div className="navbar">
        <Nav navList={navList}></Nav>
        <Search />
      </div>
    </header>
  );
};

export default Header;
