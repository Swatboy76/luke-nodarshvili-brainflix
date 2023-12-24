import "./Videobox.scss";
import React, { useState } from "react";
import data from "../../data/video-details.json";

function Videobox({ currentVideoID }) {
  const matchingData = data.find((item) => item.id === currentVideoID); //finds specific JSON entry
  const videoImage = matchingData?.image; //sifts though for image
  const videoSrc = matchingData?.video;
  console.log(currentVideoID); //to remove later
  return (
    <main className="videobox">
      <video id="videoplayer" controls width="250" poster={videoImage}>
        <source src={videoSrc} />
      </video>
    </main>
  );
} //get this done for fucks sake

export default Videobox;
