import "./NewComment.scss";
import pfp from "../../../../assets/images/Mohan-muruge.jpg";
function NewComment() {
  const numbrOfComments = "N/A";
  return (
    <section className="NewComment">
      <p>{numbrOfComments} Comments</p>
      <div className="imageform">
        <img className="imageform__image" src={pfp} alt="PFP" />
        <form className="form">
          <div className="form__left">
            <label className="form__left--label" for="commentbox">
              JOIN THE CONVERSATION
            </label>
            <input
              className="form__left--input"
              type="textbox"
              name="commentbox"
              id="commentbox"
            />
          </div>
          <input
            type="submit"
            name="submit"
            id="submit"
            className="form__right"
            placeholder="Comment"
            value="Comment"
          />
        </form>
      </div>
    </section>
  );
}
export default NewComment;
