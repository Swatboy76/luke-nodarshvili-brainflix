import "./Topbar.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import userPfP from "../../assets/images/Mohan-muruge.jpg";
import uploadarrow from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <header className="headerbar">
      <Link to="">
        <img className="headerbar__logo" src={logo} alt="Logo" />
      </Link>
      <div className="headerbar__left">
        <div className="headerbar__navimg">
          <form className="headerbar__form">
            <input
              className="headerbar__form-input"
              type="text"
              id="searchBar"
              placeholder="Search"
            />
          </form>
          <img
            src={userPfP}
            className="headerbar__userpfp headerbar__userpfp--phonescreen"
          />
        </div>
        <Link to="/Upload">
          <div className="headerbar__upload">
            <img
              className="headerbar__upload-image"
              src={uploadarrow}
              alt="Logo"
            />
            <p className="headerbar__text">UPLOAD</p>
          </div>
        </Link>
        <img
          src={userPfP}
          className="headerbar__userpfp headerbar__userpfp--widescreen"
        />
      </div>
    </header>
  );
}

export default Topbar;
//<Link to=`/Upload` >
//</Link>;
