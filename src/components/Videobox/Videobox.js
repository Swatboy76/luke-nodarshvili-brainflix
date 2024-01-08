import "./Videobox.scss";
import { useEffect, useState } from "react";
import brainFlixAPI from "../../data/api-system";

function Videobox({ currentVideoID, data }) {
  let [VideoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let api = new brainFlixAPI(currentVideoID);
        const response = await api.getVideobyId(currentVideoID);
        setVideoData(response);
        console.log(response);
        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentVideoID]);
  if (!VideoData) {
    return <p>Loading..</p>;
  }

  const videoImage = VideoData.image;
  const videoSrc = VideoData.video;
  return (
    <main className="videobox">
      <video id="videoplayer" controls width="250" poster={videoImage}>
        <source src={videoSrc} />
      </video>
    </main>
  );
}

export default Videobox;
