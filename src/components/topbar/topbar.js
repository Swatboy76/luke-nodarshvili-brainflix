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
            className="headerbar__navimg headerbar__form"
            type="text"
            id="searchBar"
            placeholder="Search"
          ></input>
        </form>
        <img
          src={userPfP}
          className="headerbar__navimg headerbar__userpfp--phonescreen"
        />
      </div>
      <div className="headerbar__upload">
        <img
          className="headerbar__upload headerbar__uploadimage"
          src={uploadarrow}
          alt="Logo"
        />
        <p>UPLOAD</p>
      </div>
    </header>
  );
}

export default topbar;
