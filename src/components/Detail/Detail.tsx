import {
  DocumentData,
  doc,
  getDoc,
  DocumentReference,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase/firebase";
import { IMovie } from "../../utils/movieInt";
import {
  Background,
  Container,
  ImageTitle,
  ContentMeta,
  Controls,
  Player,
  Trailer,
  AddList,
  GroupWatch,
  SubTitle,
  Description,
} from "./Detail.styles";

const Detail = () => {
  const params: { id: string } = useParams();
  const [detailData, setDetialData] = useState<IMovie | any>({});

  const getMovie = async () => {
    try {
      const docRef: DocumentReference<DocumentData> = doc(
        db,
        "movies",
        params.id
      );

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDetialData(docSnap.data());
      } else {
        console.log("No such document! in firebase 🔥");
      }
    } catch (error: any) {
      console.log("Error getting document:", error.message);
    }
  };

  useEffect(() => {
    getMovie();
  }, [params.id]);

  console.log(detailData);
  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>
      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

export default Detail;
