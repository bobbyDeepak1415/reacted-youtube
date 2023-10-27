import React from "react";
import "./SideBar.css";
import SideBarRow from "./SideBarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SideBar = () => {
  return (
    <div className="sidebar">
      <SideBarRow selected Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={WhatshotIcon} title="Trending" />
      <SideBarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr />
      <SideBarRow Icon={VideoLibraryIcon} title="Library" />
      <SideBarRow Icon={HistoryIcon} title="History" />
      <SideBarRow Icon={SmartDisplayIcon} title="Your Videos" />
      <SideBarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SideBarRow Icon={PlaylistPlayIcon} title="Playlists" />
      <SideBarRow Icon={ExpandMoreIcon} title="Show more" />
      <hr />
    </div>
  );
};

export default SideBar;
