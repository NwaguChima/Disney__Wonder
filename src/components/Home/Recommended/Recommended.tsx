import React from "react";
import { Link } from "react-router-dom";
import { Container, Content, Wrap } from "./Recommended.styles";

const Recommended = () => {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <Link to="/">
            <img src="images/" alt="cards" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

export default Recommended;
