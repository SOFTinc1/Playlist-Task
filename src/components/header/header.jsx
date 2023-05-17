import React from "react";
import { HeaderContainer, Logo, Options, Option } from "./header.styles";
import Button from "../button/button";

const Header = () => {
  return (
    <HeaderContainer>
        <Logo></Logo>
      <Options>
        <Option>contact us</Option>
        <Option>
          <Button>sign up</Button>
        </Option>
      </Options>
    </HeaderContainer>
  );
};

export default Header;
