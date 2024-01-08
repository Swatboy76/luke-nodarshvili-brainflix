import "./Videomenu.scss";
import videoData from "../../data/videos.json";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import output from "../../data/api-system";

function Videomenu({ currentVideoID, setCurrentVideoID }) {
  const changeVideo = (videoId) => {
    setCurrentVideoID(videoId);
  };
  // Chat GPT start
  const YourComponent = () => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await output();
          console.log(response);
          // Update state or perform other actions with the response
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);
  };
  YourComponent(); // Chat GPT end

  return (
    <section className="videomenu">
      <p className="videomenu__title">NEXT VIDEOS</p>
      <ul className="individualVideo__list">
        {videoData.map((video) => {
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
