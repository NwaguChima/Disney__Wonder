import React, { useEffect, useState } from "react";
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

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  //   let recommends: any;
  //   let newDisneys: any;
  //   let originals: any;
  //   let trending: any;

  // db("movies").onSnapshot((snapshot: any) => {
  //   snapshot.docs.map((doc: any) => {
  //     switch (doc.data().type) {
  //       case "recommend":
  //         recommends = [...recommends, { id: doc.id, ...doc.data() }];
  //         break;
  //       case "new":
  //         newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
  //         break;
  //       case "original":
  //         originals = [...originals, { id: doc.id, ...doc.data() }];
  //         break;
  //       case "trending":
  //         trending = [...trending, { id: doc.id, ...doc.data() }];
  //         break;
  //     }
  //   });
  // });
  useEffect(() => {
    getDocs(collection(db, "movies"))
      .then((querySnapshot) => {
        const result = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        let holdReco =
          result.length > 0 &&
          result.filter((el: any) => el.type === "recommend");

        let holdNew =
          result.length > 0 && result.filter((el: any) => el.type === "new");

        let holdTrend =
          result.length > 0 &&
          result.filter((el: any) => el.type === "trending");

        let holdOriginal =
          result.length > 0 &&
          result.filter((el: any) => el.type === "original");

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
  }, [userName]);

  //   console.log("heloo", reco);
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
