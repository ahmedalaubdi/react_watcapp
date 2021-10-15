import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../img/netflix.png";
import user from "../../img/user.png";

import {
  ArrowDropDown,
  Notifications,
  SearchOutlined,
} from "@material-ui/icons";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={logo} alt="netflix-logo" />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Puplar</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchOutlined className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img src={user} alt="user" />

          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
