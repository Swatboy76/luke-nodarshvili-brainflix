import "./TitleBio.scss";
import viewsImage from "../../../assets/icons/views.svg";
import likesImage from "../../../assets/icons/likes.svg";

function TitleBio({ currentVideoID, data }) {
  const matchingData = data.find((item) => item.id === currentVideoID);
  const videoTitle = matchingData?.title;
  const videoCreator = matchingData?.channel;
  let videoTimestamp = Number(matchingData?.timestamp);
  videoTimestamp = videoTimestamp.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const videoViews = matchingData?.views;
  const videoLikes = matchingData?.likes;
  console.log(currentVideoID);
  return (
    <article className="container">
      <section className="title">
        <h1>{videoTitle}</h1>
      </section>
      <section className="statistics">
        <div className="statistics__coloum">
          <div className="statistics__element--bold">
            <p>By {videoCreator}</p>
          </div>
          <div className="statistics__element">
            <p>{videoTimestamp}</p>
          </div>
        </div>

        <div className="statistics__coloum">
          <div className="statistics__element">
            <img src={viewsImage} alt="test" />
            <p>{videoViews}</p>
          </div>
          <div className="statistics__element">
            <img src={likesImage} alt="test" />
            <p>{videoLikes}</p>
          </div>
        </div>
      </section>
    </article>
  );
}
export default TitleBio;
