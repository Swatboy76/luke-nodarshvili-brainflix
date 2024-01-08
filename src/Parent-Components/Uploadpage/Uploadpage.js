import "./Uploadpage.scss";

function Uploadpage() {
  return (
    <main>
      <h1>Upload video</h1>
      <div className="">
        <p>Video Thumbnail</p>
        <img src="" alt="Thumbnail" className="???" />
      </div>
      <form>
        <label for="title">TITLE YOUR VIDEO</label>
        <input type="text" name="title" id="title" required />
        <label for="discription">ADD A VIDEO DISCRIPTION</label>
        <input type="textbox" name="discription" id="discription" required />
        <input type="submit" value="Upload" />
        <input type="reset" />
      </form>
    </main>
  );
}

export default Uploadpage;
