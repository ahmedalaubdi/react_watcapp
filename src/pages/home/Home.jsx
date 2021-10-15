import React from "react";
import Featured from "../../components/featured/Featured";
import NavBar from "../../components/navbar/NavBar";
import List from "../../components/list/List";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Featured type="movie" />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
