import React from "react";
import Nav from "./Nav";

const Header = ({ mobileSize, handleToggle, toggle }) => {
  return (
    <header>
      <Nav
        mobileSize={mobileSize}
        handleToggle={handleToggle}
        toggle={toggle}
      />
    </header>
  );
};

export default Header;
