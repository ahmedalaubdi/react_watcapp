import React, { useState } from "react";
import "./listItem.scss";
import lacasa from "../../img/lacsa.jpg";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://www.youtube.com/watch?v=53CQkN70msk";
  // const trailer =
  //   "https://sm3na.org/song/%D8%A7%D8%B9%D9%84%D8%A7%D9%86-%D8%A7%D9%84%D8%AC%D8%B2%D8%A1-%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3-%D9%85%D9%86-%D9%85%D8%B3%D9%84%D8%B3%D9%84la-Casa-De-Papel/";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={lacasa} alt="lacsa" />
      {isHovered && (
        <>
          <video width="320" height="240" controls autoPlay>
            <source src={trailer} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>2 Hours </span>
              <span className="limit">+21</span>
              <span>2018</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
              sit.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
