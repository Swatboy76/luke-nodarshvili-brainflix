import "./Videobox.scss";

function Videobox() {
  return (
    <main className="videobox">
      <video
        id="videoplayer"
        controls
        width="250"
        poster="https://i.imgur.com/l2Xfgpl.jpg"
      >
        <source src="https://project-2-api.herokuapp.com/stream" />
      </video>
    </main>
  );
} //get this done for fucks sake

export default Videobox;
