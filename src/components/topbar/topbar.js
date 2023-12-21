import "./topbar.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import userPfP from "../../assets/images/Mohan-muruge.jpg";
import uploadarrow from "../../assets/icons/upload.svg";

function topbar() {
  return (
    <header className="headerbar">
      <img className="headerbar__logo" src={logo} alt="Logo" />
      <div className="headerbar__navimg">
        <form>
          <input
            className="headerbar__form-input"
            type="text"
            id="searchBar"
            placeholder="Search"
          ></input>
        </form>
        <img
          src={userPfP}
          className="headerbar__userpfp headerbar__userpfp--phonescreen"
        />
      </div>
      <div className="headerbar__upload">
        <img className="headerbar__upload-image" src={uploadarrow} alt="Logo" />
        <p className="headerbar__text">UPLOAD</p>
      </div>
      <img
        src={userPfP}
        className="headerbar__userpfp headerbar__userpfp--widescreen"
      />
    </header>
  );
}

export default topbar;
