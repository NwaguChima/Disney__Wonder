import React from "react";
import { Container } from "./Home.styles";
import ImgSlider from "./ImgSlider/ImgSlider";
import NewDisney from "./NewDisney/NewDisney";
import Originals from "./Originals/Originals";
import Recommended from "./Recommended/Recommended";
import Viewers from "./Viewers/Viewers";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommended />
      <NewDisney />
      <Originals />
    </Container>
  );
};

export default Home;
