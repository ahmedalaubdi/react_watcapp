import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";
import "./watch.scss";
import trailer from "./trailer.mp4";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay={true}
        progress
        controls
        src={trailer}
      />
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/htqXL94Rza4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
    </div>
  );
};

export default Watch;
