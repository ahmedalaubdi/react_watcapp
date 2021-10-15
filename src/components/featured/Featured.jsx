import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./featured.scss";
import homeMovie from "../../img/homemovie.jpg";
import info from "../../img/info.jpg";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span> {type === "movie" ? "Movies" : "Series"} </span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="commedy">Commedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historic">Adventure</option>
            <option value="horror">Horror</option>
            <option value="romance">Rommance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentry">Documentry</option>
          </select>
        </div>
      )}
      <img src={homeMovie} alt="info" />
      <div className="info">
        <img src={info} alt="info" />

        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          ratione? Tempora aspernatur nam magni, enim rerum placeat a tenetur,
          excepturi praesentium facilis sit beatae in sint ut illum
          exercitationem sunt.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
