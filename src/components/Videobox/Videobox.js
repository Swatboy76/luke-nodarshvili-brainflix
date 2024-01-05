import "./Videobox.scss";

function Videobox({ currentVideoID, data }) {
  const matchingData = data.find((item) => item.id === currentVideoID);
  const videoImage = matchingData?.image;
  const videoSrc = matchingData?.video;
  console.log(currentVideoID);
  return (
    <main className="videobox">
      <video id="videoplayer" controls width="250" poster={videoImage}>
        <source src={videoSrc} />
      </video>
    </main>
  );
}

export default Videobox;
