import "./NewComment.scss";
import pfp from "../../../../assets/images/Mohan-muruge.jpg";
import React, { useState } from "react";

function NewComment({ numbrOfComments }) {
  const submitedForm = (event) => {
    event.preventDefault();
  };
  return (
    <section className="NewComment">
      <p className="NewComment__NumberOfComments">{numbrOfComments} Comments</p>
      <div className="imageform">
        <img className="imageform__image" src={pfp} alt="PFP" />
        <form className="form" onSubmit={submitedForm}>
          <div className="form__left">
            <label className="form__left--label" for="commentbox">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="form__left--input"
              type="textbox"
              name="commentbox"
              id="commentbox"
              placeholder="Join the conversation!"
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
