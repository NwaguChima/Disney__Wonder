import React from "react";
import { Link } from "react-router-dom";
import { Container, Content, Wrap } from "./NewDisney.styles";

const NewDisney = () => {
  return (
    <Container>
      <h4>New to Disney</h4>
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

export default NewDisney;
