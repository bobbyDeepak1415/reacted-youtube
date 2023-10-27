import React from "react";
import "./SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>

      <hr />
      <ChannelRow
        image="//yt3.ggpht.com/5Zr4bV9iJRa6zNS_-VSbZ7j5S8JhQc2Aez7b9y923AnYqJnltvI2iGdOFnWBcW-34ioPZlxzzLE=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="India Today"
        verified
        subs="7.74M"
        description="India Today TV is India's leading English News Channel. India Today YouTube channel offers latest news videos on Politics, ..."
        noOfVideos="156K Videos"
      />
      <hr />
      <VideoRow
        views="89 views"
        description="The statewide bandh called in Karnataka by pro-Kannada organisations to protest against the release of Cauvery water to Tamil ..."
        timestamp="2 days ago"
        channel="India Today"
        title="6pm Prime With Akshita Nandagopal: No Solution To Decade-long Cauvery War? | Karnataka Bandh"
        channelImage="https://yt3.ggpht.com/5Zr4bV9iJRa6zNS_-VSbZ7j5S8JhQc2Aez7b9y923AnYqJnltvI2iGdOFnWBcW-34ioPZlxzzLE=s68-c-k-c0x00ffffff-no-rj"
        image="https://i.ytimg.com/vi/UiSqtF2C8wo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGUK4CH-_l7yFwPuL59JAZbyGDvA"
      />
      <VideoRow
        views="1.1K views "
        description="Relations between India and Canada are going through their worst phase after Canadian prime minister Justin Trudeau called out ..."
        timestamp="2 days ago"
        channel="India Today"
        title="Newstrack: Opinion On BJP MP's Hate Speech; Most Definitive Sentiment Tracker"
        image="https://i.ytimg.com/vi/nKwteEpoQtI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjgMIvfDdOSbqIQUAns1AR4XtM1g"
      />

      <VideoRow
        views="4.5K views"
        description="News Today With Rajdeep Sardesai: BJP Banks Solely On Modi Factor? Women's Quota Vs Caste Census? President Droupadi ..."
        timestamp="2 days ago"
        channel="India Today"
        title="News Today With Rajdeep Sardesai: BJP Banks Solely On Modi Factor? Women's Quota Vs Caste Census?"
        image="https://i.ytimg.com/vi/ql7aPxAdDtI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBItm3E7p0BCZzoZYU3mlYkmLbeXQ"
      />
    </div>
  );
};

export default SearchPage;
