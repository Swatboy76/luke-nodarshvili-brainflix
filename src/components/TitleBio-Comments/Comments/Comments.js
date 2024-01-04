import "./Comments.scss";
import NewComment from "./NewComment/NewComment.js";

function Comments({ currentVideoID, data }) {
  let matchingData = data.find((item) => item.id === currentVideoID); //note to future self, when dealing w/ date dont devide by 1000 when using set local date
  let commentsData = matchingData?.comments;
  return (
    <section className="CommentsArea">
      <NewComment />
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
