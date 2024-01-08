import "./Comments.scss";
import NewComment from "./NewComment/NewComment.js";
import { useEffect, useState } from "react";
import brainFlixAPI from "../../../data/api-system";

function Comments({ currentVideoID }) {
  let [commentsData, setcommentsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let api = new brainFlixAPI(currentVideoID);
        const response = await api.getVideobyId(currentVideoID);
        setcommentsData(response);
        console.log(response);
        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentVideoID]);
  if (!commentsData) {
    return <p>Loading..</p>;
  }

  let commentsLen = commentsData.length;
  return (
    <section className="CommentsArea">
      <NewComment numbrOfComments={commentsLen} />
      <ul className="CommentsArea__list">
        {commentsData.comments.map((comment) => {
          return (
            <li key={comment.id} className="IndividualComment">
              <img className="IndividualComment__Picture" />
              <div className="IndividualComment__Contents">
                <div className="IndividualComment__NameDate">
                  <p>{comment.name}</p>
                  <p className="IndividualComment__NameDate--Date">
                    {comment.timestamp}
                  </p>
                </div>
                <p>{comment.comment}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default Comments;
