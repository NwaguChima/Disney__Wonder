import React from "react";
import { Link } from "react-router-dom";
import { Container, Content, Wrap } from "../NewDisney/NewDisney.styles";

const Originals = () => {
  return (
    <Container>
      <h4>Originals</h4>
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

export default Originals;
