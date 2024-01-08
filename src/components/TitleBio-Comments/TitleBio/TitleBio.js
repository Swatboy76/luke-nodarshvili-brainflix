import "./TitleBio.scss";
import viewsImage from "../../../assets/icons/views.svg";
import likesImage from "../../../assets/icons/likes.svg";
import { useEffect, useState } from "react";
import brainFlixAPI from "../../../data/api-system";

function TitleBio({ currentVideoID }) {
  let [titleBioData, setTitleBioData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let api = new brainFlixAPI(currentVideoID);
        const response = await api.getVideobyId(currentVideoID);
        setTitleBioData(response);
        console.log(response);
        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentVideoID]);
  if (!titleBioData) {
    return <p>Loading..</p>;
  }
  const videoTitle = titleBioData.title;
  const videoCreator = titleBioData.channel;
  const videoViews = titleBioData.views;
  const videoLikes = titleBioData.likes;
  let videoTimestamp = Number(titleBioData.timestamp);
  videoTimestamp = videoTimestamp.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const Videodiscription = titleBioData.description;
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
      <section>
        <p>{Videodiscription}</p>
      </section>
    </article>
  );
}
export default TitleBio;
