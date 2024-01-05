import "./Mainpage.scss";
import TitleBio from "../../components/TitleBio-Comments/TitleBio/TitleBio.js";
import Topbar from "../../components/Topbar/Topbar.js";
import Videobox from "../../components/Videobox/Videobox.js";
import React, { useState } from "react";
import data from "../../data/video-details.json";
import Comments from "../../components/TitleBio-Comments/Comments/Comments.js";
import Videomenu from "../../components/Videomenu/Videomenu.js";
import { useParams } from "react-router-dom";

function Mainpage({ URL }) {
  const [currentVideoID, setCurrentVideoID] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  return (
    <>
      <Videobox currentVideoID={currentVideoID} data={data} />
      <div className="Acidegroup">
        <div>
          <TitleBio currentVideoID={currentVideoID} data={data} />
          <Comments currentVideoID={currentVideoID} data={data} />
        </div>
        <acide className="Acidegroup__Acide">
          <Videomenu
            currentVideoID={currentVideoID}
            setId={setCurrentVideoID}
          />
        </acide>
      </div>
      <div className="Acidegroup__Underneath">
        <Videomenu currentVideoID={currentVideoID} setId={setCurrentVideoID} />
      </div>
    </>
  );
}
export default Mainpage;
