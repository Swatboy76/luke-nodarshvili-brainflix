import "./Videomenu.scss";
import videoData from "../../data/videos.json";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Videomenu({ currentVideoID, setCurrentVideoID }) {
  function ChangeVideo() {
    const { videoId } = useParams();
    setCurrentVideoID(videoId);
  }
  return (
    <section className="videomenu">
      <p className="videomenu__title">NEXT VIDEOS</p>
      <ul className="individualVideo__list">
        {videoData.map((video) => {
          return (
            video.id !== currentVideoID && (
              <Link key={video.id} to={`/${video.id}`} onClick={ChangeVideo}>
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
