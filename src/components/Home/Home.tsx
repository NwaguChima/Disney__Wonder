import { useEffect } from "react";
import { Container } from "./Home.styles";
import ImgSlider from "./ImgSlider/ImgSlider";
import NewDisney from "./NewDisney/NewDisney";
import Originals from "./Originals/Originals";
import Recommended from "./Recommended/Recommended";
import Trending from "./Trending/Trending";
import Viewers from "./Viewers/Viewers";
import { useDispatch, useSelector } from "react-redux";
import db from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { setMovies } from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/user/userSlice";
import { IMovie } from "../../utils/movieInt";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    getDocs(collection(db, "movies"))
      .then((querySnapshot) => {
        const result: [IMovie] = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as [IMovie];

        let holdReco =
          result.length > 0 &&
          result.filter((el: IMovie) => el.type === "recommend");

        let holdNew =
          result.length > 0 && result.filter((el: any) => el.type === "new");

        let holdTrend =
          result.length > 0 &&
          result.filter((el: IMovie) => el.type === "trending");

        let holdOriginal =
          result.length > 0 &&
          result.filter((el: IMovie) => el.type === "original");

        dispatch(
          setMovies({
            recommend: holdReco,
            newDisney: holdNew,
            original: holdOriginal,
            trending: holdTrend,
          })
        );
      })
      .catch((err) => {
        // TODO: Handle errors
        console.error("Failed to retrieve data", err);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommended />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

export default Home;
