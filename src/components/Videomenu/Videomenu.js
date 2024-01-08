import "./Videomenu.scss";
// import videoData from "../../data/videos.json";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import brainFlixAPI from "../../data/api-system";

function Videomenu({ currentVideoID, setCurrentVideoID }) {
  const changeVideo = (videoId) => {
    setCurrentVideoID(videoId);
  };

  const [videos, setVideos] = useState(null);

  // useEffect triggers after the first render
  useEffect(() => {
    const fetchData = async () => {
      try {
        let api = new brainFlixAPI();
        const response = await api.getVideoList();
        setVideos(response);
        console.log(response);
        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!videos) {
    return <p>Loading..</p>;
  }

  return (
    <section className="videomenu">
      <p className="videomenu__title">NEXT VIDEOS</p>
      <ul className="individualVideo__list">
        {videos.map((video) => {
          return (
            video.id !== currentVideoID && (
              <Link
                key={video.id}
                to={`/${video.id}`}
                onClick={() => changeVideo(video.id)}
              >
                <li key={video.id} className="individualVideo">
                  <img
                    src={video.image}
                    alt="Thumbnail"
                    className="individualVideo__thumbnail"
                  />
                  <div className="individualVideo__text">
                    <p className="individualVideo__title">{video.title}</p>
                    <p>{video.channel}</p>
                  </div>
                </li>
              </Link>
            )
          );
        })}
      </ul>
    </section>
  );
}
export default Videomenu;
