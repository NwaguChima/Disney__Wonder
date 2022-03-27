import React from "react";
import { Nav, Logo } from "./Header.styles";

const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney logo" />
      </Logo>
    </Nav>
  );
};

export default Header;
