import React from "react";

const Nav = (props) => {
  const navlist = props.navList;
  return (
    <nav>
      <ul className="navlist">
        {navlist.map((nav, index) => {
          return <li key={index}>{nav}</li>;
        })}
      </ul>
    </nav>
  );
};

export default Nav;
