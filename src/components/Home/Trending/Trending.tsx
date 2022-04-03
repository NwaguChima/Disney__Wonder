import { Link } from "react-router-dom";
import { Container, Content, Wrap } from "../Recommended/Recommended.styles";
import { selectTrending } from "../../../features/movie/movieSlice";
import { IMovie } from "../../../utils/movieInt";
import { useSelector } from "react-redux";

const Trending = () => {
  const movies = useSelector(selectTrending);

  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        {movies &&
          movies.map((movie: IMovie) => (
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

export default Trending;
