import React from "react";
import { auth } from "../../firebase/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDoc } from "firebase/firestore/lite";
import { Nav, Logo, NavMenu, Login } from "./Header.styles";

const Header = () => {
  const provider = new GoogleAuthProvider();
  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result: any) => {
        console.log(result);
      })
      .catch((error: any) => {
        alert(error.message);
      });
  };

  return (
    <Nav>
      <Logo href="#">
        <img src="/images/logo.svg" alt="Disney logo" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="Home" />
          <span>HOME</span>
        </a>
        <a href="/home">
          <img src="/images/search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a href="/home">
          <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a href="/home">
          <img src="/images/original-icon.svg" alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>
        <a href="/home">
          <img src="/images/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a href="/home">
          <img src="/images/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Login onClick={handleAuth}>Login</Login>
    </Nav>
  );
};

export default Header;
