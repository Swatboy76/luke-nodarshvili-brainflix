import "./Comments.scss";
import NewComment from "./NewComment/NewComment.js";

function Comments({ currentVideoID, data }) {
  let matchingData = data.find((item) => item.id === currentVideoID);
  let commentsData = matchingData?.comments;
  let commentsLen = commentsData.length;
  return (
    <section className="CommentsArea">
      <NewComment numbrOfComments={commentsLen} />
      <ul className="CommentsArea__list">
        {commentsData.map((comment) => {
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
