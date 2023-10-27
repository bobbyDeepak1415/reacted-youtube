import React from "react";
import "./Videos.css";
import VideoCard from "./VideoCard";

const Recommended = () => {
  return (
    <div className="recommended">
      <h2>Recommended</h2>
      <div className="rec_vids">
        <VideoCard
          title="Daniel Craig Answers Questions About James Bond 007 | GQ "
          views="3.4M Views"
          timeStamp="2 days ago"
          channelImage="https://yt3.ggpht.com/ytc/APkrFKasT_4fKiu5mWKnoLTW11yA1tvBUPgsgwT_Frz5og=s68-c-k-c0x00ffffff-no-rj"
          channel="GQ"
          image="https://i.ytimg.com/vi/dP-IlGZBH1E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvIMtp7kVz5xa8GPfqVF-xVTT5Pw"
        />
        <VideoCard
          title="Beasts Of No Nation"
          views="14M views"
          timeStamp="8 Years Ago"
          channelImage="https://yt3.ggpht.com/ytc/APkrFKaC4ajdBhHtm8ab6oHYJe-axsJzGqlnG54qHtuXsg=s68-c-k-c0x00ffffff-no-rj"
          channel="Netflix"
          image="https://i.ytimg.com/vi/2xb9Ty-1frw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBaxEbDkzeIaKSeeffJhv7KZehfLQ"
        />
        <VideoCard
          title="British Actors Vs American Actors | Key & Peele"
          views="430k views"
          timeStamp="3 months ago"
          channelImage="https://yt3.ggpht.com/qBNpDM75Qt4CttB_UHRseOctv6wTeXuw1J08JHNjBCRKx5NHCLxVSrPUlhRKMHI37r05upXO-Q=s88-c-k-c0x00ffffff-no-rj"
          channel="Comedy Central UK"
          image="https://i.ytimg.com/vi/S2_oXZKr_J8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTdYqIw6Hei5lRPwi1JBwN6b6rnQ"
        />
        <VideoCard
          title="There Will Be Blood - Daniel Plainview opening speech scene (High Quality)"
          views="210k views"
          timeStamp="9 months ago"
          channelImage="https://yt3.googleusercontent.com/mw483YcqqX9G6l8dlnHOr-uGxowbYMZj4Z96AV2WkaAX33Jic4hgo6O4kkKQqMpse2hFZo5l0g=s176-c-k-c0x00ffffff-no-rj"
          channel="There will be Cinema"
          image="https://i.ytimg.com/vi/FQmb3b3HYeA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfb2_jqMzCgiAFWs0C_2OyJspeaQ"
        />
        <VideoCard
          title="The Best Display of Muay Thai in MMA"
          views="3.1M views"
          timeStamp="11 months ago"
          channelImage="https://yt3.ggpht.com/R8WBFsUJs3l1b1mv08r_1LTKlnl5K9HarXKPO3d8xBy1rIkO2PYxuDtiOplDMpDur0RCAVgzKw=s68-c-k-c0x00ffffff-no-rj"
          channel="Pull Up That Jamie"
          image="https://i.ytimg.com/vi/SfGyVRAvhgs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDHazTR3E9UBLbSwOYmKnpqTcGEQ"
        />
        <VideoCard
          title="Full Stack Web Development for Beginners (Full Course on HTML, CSS, JavaScript, Node.js,..."
          views="1.1M views"
          timeStamp="10 months ago"
          channelImage="https://yt3.ggpht.com/ytc/APkrFKaqca-xQcJtp1Pqv-APucCa0nToHYGPVT00YBGOSw=s68-c-k-c0x00ffffff-no-rj"
          channel="
          freeCodeCamp.org
          "
          image="https://i.ytimg.com/vi/nu_pCVPKzTk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACOsSv9qjNB3wx6t4d1L69vJs6SQ"
        />

        <VideoCard
          title="Unf*ck Your Screenplay in Like 5 Minutes | Actual Writing Advice"
          views="1.8M views"
          timeStamp="7 months ago"
          channelImage="https://yt3.ggpht.com/i-f0R9LquSo-dd-qEQ5zULqkMtORBaaVrOyag3ub7HCoUDWXUFiVcjj9KPZgQGIdUnWNyPbPcg=s68-c-k-c0x00ffffff-no-rj"
          channel="
          LocalScriptMan
          "
          image="https://i.ytimg.com/vi/h7yd99_MbLE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBz94qfKK-8TXOfK9N8ilYRxIGA1Q"
        />
        {/* <VideoCard
          title="Joe Rogan On Why China Can Not Invade Taiwan!"
          views="553k Views"
          timeStamp="8 days ago"
          channel="JRE shorts"
          channelImage="https://yt3.googleusercontent.com/ytc/APkrFKbBmJ8WENxgTF75_I_b6zMCfinbcO7zWEwQcvbYxA=s176-c-k-c0x00ffffff-no-rj"
          image="https://i.ytimg.com/vi/NPtwQMpUc34/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKZu86gMPQSpuCPE1pm1DHWj4M1w"
        /> */}

        <VideoCard
          title="Alejandro Confronts Fausto Alarcón | Sicario (2015)"
          views="590K Views"
          timeStamp="2 months ago"
          channelImage="https://yt3.ggpht.com/OtwEqqyvWecEcqkFRPMEwMV1VPs8L2jCntP5q4JSZEfha89mYK7TRYCF0u8il3nKaXDukC3hgw=s68-c-k-c0x00ffffff-no-rj"
          channel="All Out Action"
          image="https://i.ytimg.com/vi/iQxYV3j3Vzg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbAha8O6CUpoHGytK53sbb6_XKEw"
        />

        <VideoCard
          title="Creating a Weather App Using HTML, CSS and JavaScript 🔥"
          views="428K views"
          timeStamp="9 months ago"
          channelImage="https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s68-c-k-c0x00ffffff-no-rj"
          channel="CodeWithHarry"
          image="https://i.ytimg.com/vi/pFvWwFua6mw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgYwp4rqisdl8FNpt1xb6xAXNPvQ"
        />

        <VideoCard
          title="Argylle - Official Trailer (2024) Bryce Dallas Howard, Henry Cavill, Samuel L. Jackson"
          views="8.1M views"
          timeStamp="7 days ago"
          channelImage="https://yt3.ggpht.com/aBCeBf7Qlr3OwsS-RB3Mgql_Vyv3Lt0mJmiHJJI0kB2RJq_U3JxQPCzdtDWEXR9KXtU_DKlI=s68-c-k-c0x00ffffff-no-rj"
          channel="IGN"
          image="https://i.ytimg.com/vi/YawbC95KWHI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBiBlrd_BzoEjxDrWCgeKoMEYw1Dw"
        />

        <VideoCard
          title="The Impact of Marcus Aurelius and Ancient Philosophers"
          views="1.8M views"
          timeStamp="1 year ago"
          channelImage="https://yt3.ggpht.com/ytc/APkrFKbBmJ8WENxgTF75_I_b6zMCfinbcO7zWEwQcvbYxA=s68-c-k-c0x00ffffff-no-rj"
          channel="PowerfulJRE"
          image="https://i.ytimg.com/vi/n8yZpKsaSbU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaPoBYBWiUmjFdI6a2LbIzaiAPcA"
        />

        <VideoCard
          title="10 Screenwriting Tips from Quentin Tarantino on how he wrote Pulp Fiction and Inglourious Basterds"
          views="2.48M views"
          timeStamp="3 years ago"
          channelImage="https://yt3.ggpht.com/ytc/APkrFKZM48oiWeBmz55m7vBZyK_V7v_-RYXMNqTYNKLo=s68-c-k-c0x00ffffff-no-rj"
          channel="Outstanding Screenplays"
          image="https://i.ytimg.com/vi/WSpqFn5TRCk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWdbMxkUYLZeGrwQul8YD8hVa9UQ"
        />

        <VideoCard
          title="Elon Musk Thinks Coronavirus isn’t as Lethal as What We’ve Been Led to Believe"
          views="3.5M views"
          timeStamp="3 years ago"
          channelImage="https://yt3.ggpht.com/ytc/APkrFKYEwnQu_m6a4zAwlavqn2ylAZ6-_uDsjGURxiJHUA=s68-c-k-c0x00ffffff-no-rj"
          channel="JRE clips"
          image="https://i.ytimg.com/vi/x7K6ZmSb7n8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1qzlaHHAgjNnr0X9GZz6SGcDDYQ"
        />

        <VideoCard
          title="Killers of the Flower Moon — Official Teaser Trailer"
          views="7.8M views"
          timeStamp="2 mpnths ago"
          channelImage="https://yt3.ggpht.com/ytc/APkrFKZiTfC7qU_fu27IWfebdB7Bqm-Ln1uRZ8qbHeg0mg=s68-c-k-c0x00ffffff-no-rj"
          channel="Apple TV"
          image="https://i.ytimg.com/vi/EG0si5bSd6I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiHB99KIJwDIhw0SiJFEJsO_O1nw"
        />

        <VideoCard
          title="JRE: GREEK Cities in Afghanistan!"
          views="1.3M views "
          timeStamp="5 months ago"
          channelImage="https://yt3.ggpht.com/ytc/APkrFKbBmJ8WENxgTF75_I_b6zMCfinbcO7zWEwQcvbYxA=s68-c-k-c0x00ffffff-no-rj"
          channel="JRE Shorts"
          image="https://i.ytimg.com/vi/mjAC3isoi1Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvNzfC5m7t7jyyxOFn1H7p7X5FNw"
        />
      </div>
    </div>
  );
};

export default Recommended;
