import "./Videomenu.scss";
import videoData from "../../data/videos.json";
const currentVideoID = "84e96018-4022-434e-80bf-000ce4cd12b8";
function Videomenu() {
  return (
    <section className="Videomenu">
      <p>NEXT VIDEOS</p>
      <ul className="individualVideo__list">
        {videoData.map((video) => {
          return (
            video.id !== currentVideoID && (
              <li key={video.id} className="individualVideo">
                <img
                  src={video.image}
                  alt="Thumbnail"
                  className="individualVideo__thumbnail"
                />
                <div>
                  <p className="individualVideo__title">{video.title}</p>
                  <p>{video.channel}</p>
                </div>
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
}
export default Videomenu;
