import React from "react";
import { Nav, Logo, NavMenu } from "./Header.styles";

const Header = () => {
  return (
    <Nav>
      <Logo href="#">
        <img src="/images/logo.svg" alt="Disney logo" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="Home" />
          <span>Home</span>
        </a>
      </NavMenu>
    </Nav>
  );
};

export default Header;
