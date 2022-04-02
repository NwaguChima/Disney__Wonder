import React from "react";
import { Link } from "react-router-dom";
import { Container, Content, Wrap } from "./Recommended.styles";
import { useSelector } from "react-redux";
import { selectRecommend } from "../../../features/movie/movieSlice";
import { IMovie } from "../../../utils/movieInt";

const Recommended = () => {
  const movies = useSelector(selectRecommend);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies &&
          movies.map((movie: IMovie, key: number) => (
            <Wrap key={movie.id}>
              {movie.id}
              <Link to={"/detail/" + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default Recommended;
