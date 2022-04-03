import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Content, Wrap } from "../Recommended/Recommended.styles";
import { selectOriginal } from "../../../features/movie/movieSlice";
import { IMovie } from "../../../utils/movieInt";

const Originals = () => {
  const movies = useSelector(selectOriginal);

  return (
    <Container>
      <h4>Originals</h4>
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

export default Originals;
