import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar } from "@mui/material";
// import MicIcon from '@mui/icons-material/Mic';
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header_mid">
        <input
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
          value={inputSearch}
          className="inputArea_text"
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_inputButton" />
        </Link>
      </div>
      {/* <MicIcon/> */}
      <div className="header_right">
        <VideoCallIcon className="header_icon" />
        <NotificationsNoneIcon className="header_icon" />
        <Avatar
          className="header_icon"
          alt="Bobby Deepak"
          src="https://yt3.ggpht.com/DZ9KsHjpzYE2DEvCFO4edQZqK2hHt18MEB9xHkAQTkNKt6uqW5h9zRp_V24DW96VDsmjyaJG2w=s88-c-k-c0x00ffffff-no-rj"
        />
      </div>
    </div>
  );
};

export default Header;
